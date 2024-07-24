<script lang="ts">
	import { onMount } from 'svelte';

	let countdown = '';

	function getNextSaturdayMidnight() {
		const now = new Date();
		const day = now.getDay(); // 0 (Sunday) - 6 (Saturday)

		let daysUntilNextSaturday = (6 - day + 7) % 7;

		if (daysUntilNextSaturday === 0) {
			daysUntilNextSaturday = 7; // Skip to next week if today is Saturday
		}

		const nextSaturday = new Date(now.getTime() + daysUntilNextSaturday * 24 * 60 * 60 * 1000);
		nextSaturday.setHours(0, 0, 0, 0); // Set to midnight

		return nextSaturday;
	}

	function updateCountdown() {
		const nextSaturdayMidnight = getNextSaturdayMidnight();
		const now = new Date();
		const timeRemaining = nextSaturdayMidnight.getTime() - now.getTime();

		if (timeRemaining < 0) {
			countdown = 'Countdown expired!';
			return;
		}

		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	onMount(() => {
		updateCountdown();
		const intervalId = setInterval(updateCountdown, 1000);
		return () => clearInterval(intervalId);
	});
</script>

<section>
	<div class="rounded-md p-4 text-center">
		<div class="font-bold mb-2">Weekend</div>
		<div>{countdown}</div>
	</div>
</section>
