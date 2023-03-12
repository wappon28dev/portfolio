<script lang="ts">
  import type TopAppBarComponentDev from "@smui/top-app-bar";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton, { Icon } from "@smui/icon-button";
  import { AppContent } from "@smui/drawer";
  import { isLandscape, isLoading } from "$lib/model/store";
  import { onMount } from "svelte";
  import PageTransition from "$lib/components/page-transition.svelte";
  import LinearProgress from "@smui/linear-progress";
  import Splash from "$lib/components/splash.svelte";
  import { isLandscapeDetect, runTransition } from "$lib/model/constants";
  import type { PageData } from "./$types";
  import Button, { Label } from "@smui/button";
  import BackToTop from "$lib/components/back-to-top.svelte";
  import { goto } from "$app/navigation";
  import { pageManifests } from "$lib/model/manifests";
  import HomeOutline from "svelte-material-icons/HomeOutline.svelte";
  import Launch from "svelte-material-icons/Launch.svelte";

  export let data: PageData;

  let topAppBar: TopAppBarComponentDev;
  export let hasLoaded = false;

  onMount(() => {
    updateSize();
    hasLoaded = true;

    // callback windows width event
    window.addEventListener("resize", updateSize);
  });

  function updateSize(): void {
    $isLandscape = isLandscapeDetect();
    let path = new URL(location.href).pathname;
    if (path === "/") return;
  }
</script>

<Splash {hasLoaded} />
<div style={`cursor: ${$isLoading ? "progress" : "normal"};`}>
  <TopAppBar bind:this={topAppBar} variant="standard">
    <Row>
      <Section>
        <IconButton on:click={() => runTransition(pageManifests.HOME)}>
          <HomeOutline />
        </IconButton>
        <Title
          style="cursor: pointer;"
          on:click={() => runTransition(pageManifests.HOME)}
          ><strong>わっぽん</strong></Title
        >
      </Section>
      <Section align="end" toolbar>
        <Button
          on:click={() => goto("https://github.com/wappon-28-dev/portfolio")}
        >
          <Icon><Launch /></Icon>
          <Label>source</Label>
        </Button>
      </Section>
    </Row>

    <div class="progress-mobile">
      {#if $isLoading}
        <LinearProgress class="progress-bar-mobile" indeterminate />
      {/if}
    </div>
  </TopAppBar>

  <AutoAdjust {topAppBar}>
    <AppContent class="app-content">
      <PageTransition {data}>
        <slot />
      </PageTransition>
    </AppContent>
  </AutoAdjust>

  <BackToTop />
</div>

<style lang="scss">
  :global(.app-content) {
    overflow-y: visible;
    overflow-x: hidden;

    height: 100%;
    width: 100%;
  }

  :global(
      .mdc-circular-progress__determinate-circle,
      .mdc-circular-progress__indeterminate-circle-graphic
    ) {
    stroke: var(--m3-on-primary);
  }
  .progress-mobile {
    margin-top: -5.5px;
    min-height: 4px;
  }
</style>
