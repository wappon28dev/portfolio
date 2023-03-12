<script lang="ts">
  export let hasLoaded = false;
</script>

<div class={`wrapper fade${hasLoaded ? "-out" : ""}`}>
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
    z-index: 999;
    background-color: var(--m3-back);
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
      display: none;
    }
  }

  .fade-out {
    animation: fadeout 300ms linear forwards;
  }

  @keyframes loading-scale {
    0% {
      transform: scale(0);
    }
    100% {
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
