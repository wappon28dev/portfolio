<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import type { PageManifest } from "$lib/model/manifests";
  import { isLoading } from "$lib/model/store";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  onMount(() => ($isLoading = false));

  const pageManifest: PageManifest = {
    path: data.pathname,
    meta: {
      title: data.meta.title,
      description: data.meta.description,
      ogp: {
        img: data.coverImage.src,
      },
    },
  };
</script>

<Meta {pageManifest} />

<section>
  <article>
    <h1>{data.title}</h1>
    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html data.body}
  </article>
</section>

<style lang="scss">
  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  section {
    margin-bottom: 30px;
    :global(h2) {
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline solid red 2px;
    }

    :global(img) {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
</style>
