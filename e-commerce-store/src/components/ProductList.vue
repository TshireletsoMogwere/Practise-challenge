<template>
    <div class="product-list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="goToProduct(product.id)"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import ProductItem from './ProductItem.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: { ProductItem },
    setup() {
      const products = ref([]);
      const router = useRouter();
  
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        products.value = await response.json();
      };
  
      const goToProduct = (id) => {
        router.push(`/product/${id}`);
      };
  
      onMounted(fetchProducts);
  
      return { products, goToProduct };
    },
  };
  </script>
  
  <style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>
  