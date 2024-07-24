<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen bg-yellow-950 bg-opacity-75 text-white overflow-hidden">
	<header class="fixed top-0 left-0 right-0 z-10 px-4 py-2">
		<Header />
	</header>

	<main class="flex-grow">
		<div class="container mx-auto py-8">
			<slot />
		</div>
	</main>

	<footer class="flex-shrink-0 p-4">
		<p class="text-center">
			developed with <a href="https://kit.svelte.dev" target="_blank" class="text-red-400"
				>SvelteKit</a
			>
		</p>
	</footer>
</div>
