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
    <span class="ri-arrow-right-up-line"></span>
  {/if}
</a>

<!--suppress CssUnusedSymbol -->
<style>
  a {
    color: var(--color-override, cornflowerblue);
    transition: color 300ms ease-in-out;
    display: inline-flex;
    text-decoration: none;
    align-items: center;
  }
  a:hover {
    color: var(--main-color);
  }
  a:active {
    color: var(--main-color)
  }
</style>
