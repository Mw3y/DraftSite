<script setup></script>

<template>
	<div class="flex flex-col h-screen">
		<header class="bg-white" v-if="$route.meta.title">
			<nav>
				<div
					class="
						flex
						items-center
						px-4
						py-4
						mx-auto
						max-w-7xl
						sm:px-6
						lg:px-8
					"
				>
					<!-- Logo -->
					<img class="h-8 md:h-10" src="./resources/images/logo-retro.png" />
					<h3 class="text-xl md:text-3xl font-bold leading-tight text-gray-900">
						Draftbot
					</h3>
				</div>
			</nav>
		</header>
		<main class="flex grow max-h-[77vh]">
			<!-- <router-view /> -->
			<div
				class="grow bg-cover bg-king"
			>
				<!-- Hero section -->
				<div class="flex flex-col items-center justify-center h-full -mt-10">
					<h1
						class="text-6xl md:text-9xl font-extrabold leading-tight text-white"
					>
						Draftbot
					</h1>
					<p class="text-1xl md:text-2xl text-center text-white max-w-xs md:max-w-2xl">
						Duis nostrud nulla est culpa ex qui enim proident magna
						quis. Proident elit ad elit ut enim ut tempor
						exercitation.
					</p>
				</div>
			</div>
		</main>
	</div>
</template>
