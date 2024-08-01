<template>
  <div>
    <div class="sort-options">
      <select @change="handleSortChange" class="sort-dropdown">
        <option value="default">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <button @click="resetFiltersAndSorting">Reset</button>
    </div>
    <div class="product-list">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="goToProduct(product.id)"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import ProductItem from './ProductItem.vue';
import { useRouter } from 'vue-router';

export default {
  components: { ProductItem },
  props: {
    selectedCategory: {
      type: String,
      default: 'All',
    },
  },
  setup(props) {
    const products = ref([]);
    const filteredProducts = ref([]);
    const originalOrder = ref([]);
    const router = useRouter();

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value = data;
        filteredProducts.value = data;
        originalOrder.value = [...data];  // Save the original order of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const filterByCategory = (category) => {
      if (category === 'All') {
        filteredProducts.value = products.value;
      } else {
        filteredProducts.value = products.value.filter(product => product.category === category);
      }
    };

    const sortByPrice = (order) => {
      if (order === 'lowToHigh') {
        filteredProducts.value.sort((a, b) => a.price - b.price);
      } else if (order === 'highToLow') {
        filteredProducts.value.sort((a, b) => b.price - a.price);
      }
    };

    const handleSortChange = (event) => {
      const sortOrder = event.target.value;
      if (sortOrder === 'default') {
        resetFiltersAndSorting();
      } else {
        sortByPrice(sortOrder);
      }
    };

    const resetFiltersAndSorting = () => {
      filteredProducts.value = [...originalOrder.value];  // Restore the original order
      if (props.selectedCategory !== 'All') {
        filterByCategory(props.selectedCategory);
      }
    };

    const goToProduct = (id) => {
      router.push(`/product/${id}`);
    };

    watch(() => props.selectedCategory, filterByCategory);

    onMounted(fetchProducts);

    return { products, filteredProducts, handleSortChange, resetFiltersAndSorting, goToProduct };
  },
};
</script>

<style scoped>
.sort-options {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.sort-dropdown {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
