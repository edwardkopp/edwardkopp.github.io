<script>
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";

  let { title = "", description = "", error = false } = $props();

  let fullTitle = $derived(title ? `${title} - Edward Kopp` : "Edward Kopp")
  let finalDescription = $derived(description ? description :
    "I'm a software developer with an interest in data encryption, and serverless technologies."
  )
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>{fullTitle}</title>
  {#if !error}
    <meta name="description" content={finalDescription}/>
    <link rel="canonical" href="https://edwardkopp.com{page.url.pathname}"/>
  {/if}
</svelte:head>
