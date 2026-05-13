<script module>
  import Link from "$lib/components/Link.svelte";
  import SEO from "$lib/components/SEO.svelte";

  export { Link as a };
</script>

<script>
  let { children, title, date, description } = $props();
</script>

<SEO {title} {description}/>

{#if title}
  <h1>{title}</h1>
{/if}
{#if date}
  <p style="color: var(--less-color)">Last updated &mdash; {date}</p>
{/if}
{@render children()}
