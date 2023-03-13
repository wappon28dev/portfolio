<script lang="ts">
  import * as animateScroll from "svelte-scrollto";
  import Fab, { Icon } from "@smui/fab";
  import ArrowUp from "svelte-material-icons/ArrowUp.svelte";

  export let showOnPx = 150;

  let hidden = true;

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) return;
    hidden = !(scrollContainer().scrollTop > showOnPx);
  }

  function scroll2Top() {
    animateScroll.scrollToTop();
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top fab-container" class:hidden>
  <Fab color="primary" on:click={scroll2Top} aria-label="ページの最初へ戻る">
    <Icon><ArrowUp /></Icon>
  </Fab>
</div>

<style lang="scss">
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
  }
  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
