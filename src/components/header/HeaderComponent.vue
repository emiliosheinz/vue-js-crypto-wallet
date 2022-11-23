<script setup lang="ts">
	import { RouterLink } from 'vue-router'
</script>

<template>
	<header class="max-w-6xl w-full p-5 m-auto flex justify-between">
		<RouterLink to="/">
			<img
				alt="Crypto Store logo"
				src="@/assets/logo.svg"
				width="101"
				height="48"
			/>
		</RouterLink>

		<RouterLink to="/wallet">
			<div class="flex space-x-1">
				<div class="flex flex-col items-end text-white justify-start">
					<p class="font-bold text-base">My Wallet</p>
					<p class="font-normal text-sm -mt-1">1 item</p>
				</div>
				<img
					alt="Vue logo"
					class="logo"
					src="@/assets/wallet.svg"
					width="33"
					height="33"
				/>
			</div>
		</RouterLink>
	</header>
</template>
