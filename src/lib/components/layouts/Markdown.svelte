<script module>
  import Link from "$lib/components/Link.svelte";

  export {Link as a};
</script>

<script>
  let { children } = $props();
</script>

{@render children()}
