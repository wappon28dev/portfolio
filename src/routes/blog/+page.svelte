<script lang="ts">
  import { isLoading } from "$lib/model/store";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  onMount(() => ($isLoading = false));
</script>

<section>
  <main>
    <h3>SevelteKitブログ</h3>
    <ul>
      {#each data.items as item}
        <li>
          <a href={`/blog/${item._id}`} on:click={() => ($isLoading = true)}>
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </main>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
