<script module>
  import Link from "$lib/components/Link.svelte";

  export { Link as a };
</script>

<script>
  let { children, title, description, date } = $props();

  let fullTitle = $derived(title ? `${title} - Edward Kopp` : "Edward Kopp");
</script>

<svelte:head>
  <title>{fullTitle}</title>
  {#if description}
    <meta name="description" content={description}>
  {/if}
</svelte:head>

{#if title}
  <h1>{title}</h1>
{/if}
{#if date}
  <p style="color: #7f7f7f">Last updated &mdash; {date}</p>
{/if}
{@render children()}
