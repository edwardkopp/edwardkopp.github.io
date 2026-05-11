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
    padding-inline: 0.5rem;
    padding-block: 0;
    border-radius: 1.25rem;
    margin: 0.25rem;
    border: 0;
    cursor: pointer;
    font-size: 2rem;
    background-color: var(--color-override, var(--main-color));
    --hover-color-base: var(--accent-override, var(--color-override, var(--main-color)));
    color: var(--main-background-color);
    transition: transform 150ms ease-in-out, background-color 150ms ease-in-out;
    display: inline-flex;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
    background-color: color-mix(in srgb, var(--hover-color-base) 85%, white)
  }
  a:active {
    transform: scale(0.95);
    background-color: color-mix(in srgb, var(--hover-color-base) 60%, white)
  }
</style>
