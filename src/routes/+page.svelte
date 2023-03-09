<script lang="ts">
  import Tree from "$lib/assets/animated/tree.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import { isLoading } from "$lib/model/store";
  import { onMount } from "svelte";

  onMount(() => ($isLoading = false));
</script>

<MetaTags title="わっぽん" description="Howdy!" />

<main>
  <div class="container">
    <div class="content">
      <Tree size={200} />
      <div class="text-container">
        <div>COMING SOON</div>
        <div>近日公開予定</div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    padding: 0 100px;
    max-width: 1400px;
    margin: 0 auto;

    @media screen and (max-width: 860px) {
      padding: 0 20px;
    }

    .container {
      height: calc(100vh - var(--app-bar-height));
      display: table;
      margin: 0 auto;

      .content {
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
  }
</style>
