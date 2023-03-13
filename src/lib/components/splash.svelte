<script lang="ts">
  export let isMounting = false;
  export let isLoading = false;
</script>

<div class="wrapper" class:isMounting class:isLoading>
  <div class="content-container">
    <content>
      <div class="spinner" />
      <p>読み込み中...</p>
    </content>
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    z-index: -1;
    opacity: 0;

    transition: all 300ms, top 0ms, height 0ms;

    &.isLoading {
      top: var(--app-bar-height);
      height: calc(100vh - var(--app-bar-height));

      z-index: 999;
      opacity: 0.2;

      background-color: var(--m3-on-background);
      overflow: hidden;
      cursor: progress;

      .content-container {
        display: none;
      }
    }

    &.isMounting {
      top: 0;
      height: 100%;

      z-index: 999;
      opacity: 1;

      background-color: var(--m3-back);
      overflow: hidden;
      cursor: progress;

      .content-container {
        display: table;
      }
    }
  }

  @keyframes loading-scale {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }

  .content-container {
    height: 100vh;
    display: table;
    margin: 0 auto;

    content {
      display: table-cell;
      vertical-align: middle;
      text-align: center;

      .spinner {
        margin: 0 auto;
        width: 50px;
        height: 50px;
        background-color: var(--m3-primary);
        border-radius: 100%;
        animation: loading-scale 900ms infinite ease-in-out;
      }
    }
  }
</style>
