<script lang="ts">
  import { fly } from "svelte/transition";
  import type { PageData } from "../../routes/$types";

  export let data: PageData;
  const xAxis = false;
</script>

<div style="overflowY: hidden">
  {#key data}
    {#if xAxis}
      <div
        in:fly={{ x: -5, duration: 250, delay: 300 }}
        out:fly={{ x: 5, duration: 250 }}
      >
        <slot />
      </div>
    {:else}
      <div
        in:fly={{ y: -5, duration: 250, delay: 250 }}
        out:fly={{ y: 5, duration: 250 }}
      >
        <slot />
      </div>
    {/if}
  {/key}
</div>
