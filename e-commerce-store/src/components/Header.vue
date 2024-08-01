<template>
    <header class="app-header">
      <h1>My E-commerce Store</h1>
      <nav class="category-nav">
        <button
          v-for="category in categories"
          :key="category"
          @click="$emit('category-select', category)"
        >
          {{ category }}
        </button>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const categories = ref([]);
  
      const fetchCategories = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products/categories');
          categories.value = ['All', ...await response.json()];
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      onMounted(fetchCategories);
  
      return { categories };
    },
  };
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #f8f9fa;
  }
  
  .category-nav {
    display: flex;
    gap: 8px;
  }
  
  .category-nav button {
    padding: 8px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .category-nav button:hover {
    background-color: #0056b3;
  }
  </style>
  