<script lang="ts">
	import { page } from '$app/stores';
	import HolidayCountDown from '$lib/components/HolidayCountDown.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
	import WeekendCountDown from '$lib/components/WeekendCountDown.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let holidays: any = data.data;

	export let quotes: string[] = [
		'A Bro is always entitled to do something stupid, as long as the rest of his Bros are all doing it.',
		"I'm a guy who has faked love his entire life",
		"Whatever you do in this life, it's not legendary, unless your friends are there to see it.",
		'When I get sad, I stop being sad and be awesome instead.',
		'A lie is just a great story that someone ruined with the truth.',
		'New is always better.',
		"Think of me like Yoda, but instead of being little and green, I wear suits and I'm awesome. I'm your bro—I'm Broda!",
		"Whatever you do in this life, it's not legendary unless your friends are there to see it.",
		'If you have a crazy story, I was there. It’s just a law of the universe.',
		"Barney Stinson: That guy's awesome!"
	];
</script>

<section class="flex flex-col items-center justify-center min-h-screen">
	<div class="w-full max-w-screen-xl">
		<Quotes {quotes} />
	</div>
	<div class="flex flex-wrap gap-4">
		<div class="p-4">
			<WeekendCountDown />
		</div>
		<div class="p-4">
			<HolidayCountDown {holidays} />
		</div>
	</div>
</section>
