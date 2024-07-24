<script lang="ts">
    import { onMount } from 'svelte';

    export let quotes: string[];

    let currentFactIndex = 0;
    let transitionClass = 'opacity-100';

    const cycleFacts = () => {
        transitionClass = 'opacity-0 transition-opacity duration-500';
        setTimeout(() => {
            currentFactIndex = (currentFactIndex + 1) % quotes.length;
            // Ensure the new quote starts fully visible
            transitionClass = 'opacity-100 transition-opacity duration-500';
        }, 500); // Match the duration of the opacity transition
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
        <p class="text-4xl text-white font-semibold italic text-center transition-opacity duration-500 {transitionClass}">
            "{currentFact}"
        </p>
        <p class="text-2xl text-white mt-4 text-center">- Barney Stinson</p>
    </div>
</div>
