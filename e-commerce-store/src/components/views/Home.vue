<template>
  <div>
    <Header @category-select="setSelectedCategory" />
    <h1>Product List</h1>
    <ProductList :selectedCategory="selectedCategory" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '../Header.vue';
import ProductList from '../ProductList.vue';

export default {
  components: {
    Header,
    ProductList,
  },
  setup() {
    const selectedCategory = ref('All');

    const setSelectedCategory = (category) => {
      selectedCategory.value = category;
    };

    return { selectedCategory, setSelectedCategory };
  },
};
</script>
