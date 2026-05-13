<script lang="ts">
  import {page} from "$app/state";
  import Link from "$lib/components/Link.svelte";
</script>

<svelte:head>
  <title>{`${page.error?.message} - Edward Kopp`}</title>
</svelte:head>

<div style="text-align: center;">
  <h1>{page.status} &mdash; {page.error?.message}</h1>
  <p>Go to the <Link href="/">home page</Link>?</p>
</div>
