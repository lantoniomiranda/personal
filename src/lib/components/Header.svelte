<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import { onMount } from 'svelte';
</script>

<header class="flex justify-between items-center text-white px-4 py-2">

	<nav class="flex-grow">
		<ul class="flex justify-center gap-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="text-lg font-bold hover:text-orange-500">yo</a>
			</li>
			<li aria-current={$page.url.pathname === '/me' ? 'page' : undefined}>
				<a href="/me" class="text-lg font-bold hover:text-orange-500">me</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/about" class="text-lg font-bold hover:text-orange-500">work</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog" class="text-lg font-bold hover:text-orange-500">thoughts</a>
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
