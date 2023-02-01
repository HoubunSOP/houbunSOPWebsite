<script setup>
import newList from '../components/index/newList.vue';
import sidebar from '../components/sidebar.vue';
import bookSwiper from '../components/index/bookSwiper.vue';
import topSwiper from '../components/index/topSwiper.vue';
</script>

<template>
  <div class="col-mb-12 col-8" id="main" role="main">
    <topSwiper />
    <bookSwiper />
    <newList />
  </div>
  <sidebar />
</template>
