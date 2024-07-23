<script>
    import Header from '../lib/components/Header.svelte';
    import '../app.css';
</script>

<div class="app bg-yellow-950 bg-opacity-75 min-h-screen text-white">
    <Header />

    <main class="flex flex-col flex-grow p-4 w-full max-w-md mx-auto">
        <slot />
    </main>

    <footer class="flex flex-col justify-center items-center p-4">
        <p>developed with <a class="text-red-400" href="https://kit.svelte.dev" target="_blank">SvelteKit</a></p>
    </footer>
</div>
