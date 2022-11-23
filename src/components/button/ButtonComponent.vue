<script setup lang="ts">
	defineProps<{ label: string }>()
</script>

<template>
	<button class="w-full h-10 bg-slate-900 text-white rounded-3xl shadow-md">
		{{ label }}
	</button>
</template>
