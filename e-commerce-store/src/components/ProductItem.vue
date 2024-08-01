<template>
  <div class="product-card">
    <img :src="product.image" alt="product image" class="product-image" />
    <div class="product-details">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 250px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.product-details {
  padding-top: 8px;
  text-align: center;
}

.product-title {
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
}

.product-price {
  font-size: 14px;
  color: #888;
}
</style>
