<script setup lang="ts">
	import HeaderComponent from './components/header/HeaderComponent.vue'
	import { RouterView } from 'vue-router'
</script>

<template>
	<HeaderComponent />
	<RouterView />
</template>
