<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let quotes: string[];

    let currentFactIndex = 0;

    const cycleFacts = () => {
        currentFactIndex = (currentFactIndex + 1) % quotes.length;
    };

    let intervalId: number;

    $: currentFact = quotes[currentFactIndex];

    onMount(() => {
        intervalId = setInterval(cycleFacts, 7000);
        return () => clearInterval(intervalId);
    });
</script>

<div class="flex items-center justify-center w-full p-4 text-center">
    <div class="w-full max-w-4xl">
        <p class="text-4xl text-white font-semibold italic text-center" transition:fade={{ duration: 1000 }}>"{currentFact}"</p>
        <p class="text-2xl text-white mt-4 text-center">- Barney Stinson</p>
    </div>
</div>

