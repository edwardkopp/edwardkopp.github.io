<script>
  let { children, href, color = undefined } = $props();

  const isExternal = $derived(href.startsWith("http"));
</script>

<a
  style:--color-override={color}
  {href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
>
  <span>{@render children()}</span>
  {#if isExternal}
    <i class="ri-arrow-right-up-line"></i>
  {/if}
</a>

<style>
  a {
    font-family: sans-serif;
    color: var(--color-override, cornflowerblue);
    transition: color 300ms ease;
    display: inline-flex;
    text-decoration: none;
    align-items: center;
  }
  a:hover {
    color: color-mix(in srgb, var(--color-override, cornflowerblue) 50%, white);
  }
  a:active {
    color: var(--main-color)
  }
</style>
