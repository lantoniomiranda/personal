<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';	
	import '../../app.css';
</script>

<header>
	
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">me</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/about">projects</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">thoughts</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://linkedin.com/in/lmiranda30" target="_blank">
			<img src={linkedin} alt="LinkedIn" />
		</a>
		<a href="https://github.com/lantoniomiranda" target="_blank">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between; 
		align-items: center;
		color: white; 
		padding: 0.5rem 1rem; 
	}

	.corner {
		display: flex;
		gap: 0.5em;  
		margin: 0.5em; 
		font-size: small;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5em;
		height: 2.5em;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex; 
		flex: 1;  
		justify-content: center; 
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: auto; 
		list-style: none;
	}

	li {
		display: inline-block; 
		margin: 0 1rem; 
		color: inherit; 
		font-weight: bold; 
	}

	a {
		text-decoration: none; 
		color: inherit; 
		transition: color 0.2s ease-in-out; 
	}

	a:hover {
		color: var(--color-theme-1)
	}

	
</style>
