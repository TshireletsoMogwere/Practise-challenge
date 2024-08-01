<template>
    <div class="product-item" @click="handleClick">
      <img :src="product.image" :alt="product.title" />
      <h2>{{ product.title }}</h2>
      <p>\${{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    methods: {
      handleClick() {
        this.$emit('click', this.product.id);
      },
    },
  };
  </script>
  
  <style>
  .product-item {
    border: 1px solid #ddd;
    padding: 16px;
    width: calc(25% - 32px);
    cursor: pointer;
    transition: transform 0.2s;
  }
  .product-item:hover {
    transform: scale(1.05);
  }
  .product-item img {
    width: 100%;
    height: auto;
  }
  </style>
  