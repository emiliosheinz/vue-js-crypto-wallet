<script setup lang="ts">
	defineProps<{ label: string; onClick: () => void; isDisabled?: boolean }>()
</script>

<template>
	<button
		type="button"
		:disabled="isDisabled"
		@click="onClick"
		class="w-full h-10 bg-slate-900 text-white rounded-3xl shadow-md disabled:opacity-50"
	>
		{{ label }}
	</button>
</template>
