<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import { onMount } from 'svelte';
</script>

<header class="flex justify-between items-center text-white px-4 py-2">

	<nav class="flex-grow">
		<ul class="flex justify-center gap-4">
			<li class={`text-lg font-bold hover:text-orange-500 ${$page.url.pathname === '/' ? 'text-orange-500' : ''}`}>
				<a href="/">yo</a>
			  </li>
			<li class={`text-lg font-bold hover:text-orange-500 ${$page.url.pathname === '/me' ? 'text-orange-500' : ''}`}>
				<a href="/me" class="text-lg font-bold hover:text-orange-500">me</a>
			</li>
			<li class={`text-lg font-bold hover:text-orange-500 ${$page.url.pathname === '/work' ? 'text-orange-500' : ''}`}>
				<a href="/work" class="text-lg font-bold hover:text-orange-500">work</a>
			</li>
			<li class={`text-lg font-bold hover:text-orange-500 ${$page.url.pathname === '/thoughts' ? 'text-orange-500' : ''}`}>
				<a href="/thoughts" class="text-lg font-bold hover:text-orange-500">thoughts</a>
			</li>
		</ul>
	</nav>

	<div class="flex items-center gap-2">
		<a
			href="https://linkedin.com/in/lmiranda30"
			target="_blank"
			class="flex items-center justify-center w-8 h-8 rounded-full  hover:bg-orange-500"
		>
			<img src={linkedin} alt="LinkedIn" class="w-6 h-6" />
		</a>
		<a
			href="https://github.com/lantoniomiranda"
			target="_blank"
			class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-orange-500"
		>
			<img src={github} alt="GitHub" class="w-6 h-6" />
		</a>
	</div>
</header>
