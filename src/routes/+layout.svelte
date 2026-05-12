<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import NavIcon from "$lib/components/NavIcon.svelte";
	import Link from "$lib/components/Link.svelte";
	import "../app.css";

	let { children } = $props();

	let year = new Date().getFullYear();

	// After this point is to stop low effort email spam
	const encodedCiphertext = "pjT4m9xO8Y3fZTktkZpx7z/WYsuW";
	const encodedKey = "w1CP+q4qsei7Elhf9fEen0/4AaT7";

	let emailLink = $state("");

	$effect(() => {
		const cipher = Uint8Array.from(atob(encodedCiphertext), c => c.charCodeAt(0));
		const key = Uint8Array.from(atob(encodedKey), c => c.charCodeAt(0));

		const emailBytes = cipher.map((byte, i) => byte ^ key[i]);

		emailLink = `${new TextDecoder().decode(emailBytes)}`;
	});

</script>

<svelte:head>
	<title>Edward Kopp</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a class="logo" href="/">
		<span>edwardkopp</span>
	</a>
	<nav style="display:inline-flex">
		<NavIcon href="mailto:{emailLink}" accent="#6d4aff">
			<i class="ri-mail-fill"></i>
		</NavIcon>
		<NavIcon href="https://github.com/edwardkopp" accent="#0fbf3e">
			<i class="ri-github-fill"></i>
		</NavIcon>
	</nav>
</header>
<div class="content center">
	<main>
		{@render children()}
	</main>
	<footer style="text-align: center;">
		<nav>
			<ul>
				<li>
					<Link href="/" color="#6f6f6f">Home</Link>
				</li>
				<li>
					<Link href="/privacy" color="#6f6f6f">Privacy</Link>
				</li>
				<li>
					<Link href="https://github.com/edwardkopp/edwardkopp.github.io" color="#6f6f6f">Source Code</Link>
				</li>
			</ul>
		</nav>
		<div style="padding-block-end: 1rem;">
			<!-- TODO Adjust the line below after 2026 -->
			<span>&copy; { year === 2026 ? "2026" : `2026-${year}`} Edward Kopp<br></span>
		</div>
	</footer>
</div>

<style>
	.logo {
		font-weight: bold;
		font-family: "Fira Code Variable", monospace;
		color: var(--main-color);
		text-decoration: none;
		margin: 0.25rem;
		padding-block: 0.5rem;
		margin-inline-end: 0.5rem;
		transition: text-shadow 150ms ease-in-out;
	}
	.logo:hover {
		text-shadow:
			0 0 1rem var(--main-color),
			0 0 2rem var(--main-color);
	}
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 0.5rem;
		padding-block-end: 1.5rem;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.9) 25%,
			rgba(0, 0, 0, 0.8) 50%,
			rgba(0, 0, 0, 0.4) 75%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.content {
		max-width: 40rem;
		margin: 0 auto;
		padding: 1rem;
		padding-block-start: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		min-height: 100vh;
		padding-block-end: 0;
	}
	main {
		width: 100%;
	}
	.content main {
		margin-block-start: auto;
		padding-block-start: 4rem;
	}
	footer {
		color: #6f6f6f;
		margin-top: auto;
		padding-block-start: 3rem;
		align-items: center;
	}
	ul {
		padding: 0;
		display: flex;
	}
	li {
		margin-inline: 1rem;
		display: inline;
	}
</style>
