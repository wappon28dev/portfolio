<script lang="ts">
  import { isLoading } from "$lib/model/store";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  onMount(() => ($isLoading = false));
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <main>
    <h1>{data.title}</h1>
    {@html data.body}
  </main>
</section>

<style>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  section :global(h2) {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline solid red 2px;
  }
</style>
