<script lang="ts">
  import Tree from "$lib/assets/animated/tree.svelte";
  import Meta from "$lib/components/meta.svelte";
  import { pageManifests } from "$lib/model/manifests";
  import { isLoading } from "$lib/model/store";
  import { onMount } from "svelte";

  onMount(() => ($isLoading = false));
</script>

<Meta pageManifest={pageManifests.HOME} />

<div class="container">
  <article>
    <Tree size={200} />
    <div class="text-container">
      <div>COMING SOON</div>
      <div>近日公開予定</div>
    </div>
  </article>
</div>

<style lang="scss">
  .container {
    height: calc(100vh - var(--app-bar-height));
    display: table;
    margin: 0 auto;

    article {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      transform: translateY(calc(var(--app-bar-height) * -1));

      .text-container {
        font-size: 2rem;
        line-height: normal;
        font-weight: 700;
        padding: 30px;
        border-radius: 20px;
        background-color: var(--m3-inverse-primary);
      }
    }
  }
</style>
