<script>
  let { children, href, color = undefined, accent = undefined } = $props();

  const isExternal = $derived(href.startsWith("http"));
</script>

<a
  style:--color-override={color}
  style:--accent-override={accent}
  {href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
>
  {@render children()}
</a>

<style>
  a {
    padding-block: 0;
    border-radius: 1.25rem;
    margin-inline: 0.5rem;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--main-color);
    display: inline-flex;
    text-decoration: none;
  }
</style>
