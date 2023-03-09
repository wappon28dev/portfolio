<script lang="ts">
  export let size: number;
</script>

<svg
  viewBox={`0 0 24 24`}
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="none"
>
  <style>
    @keyframes c-tree {
      0% {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  </style>
  <path
    class="star"
    fill-rule="evenodd"
    d="M13.149 4.636l.18-.3-.3.18a2 2 0 01-2.058 0l-.3-.18.18.3a2 2 0 010 2.057l-.18.3.3-.18a2 2 0 012.058 0l.3.18-.18-.3a2 2 0 010-2.057zm1.038.214c.535-.893-.48-1.907-1.372-1.372l-.3.18a1 1 0 01-1.03 0l-.3-.18c-.892-.535-1.907.48-1.372 1.372l.18.3a1 1 0 010 1.029l-.18.3c-.535.893.48 1.908 1.372 1.372l.3-.18a1 1 0 011.03 0l.3.18c.892.536 1.907-.48 1.372-1.372l-.18-.3a1 1 0 010-1.029l.18-.3z"
    clip-rule="evenodd"
    style="animation:c-tree 2s linear infinite both;transform-origin:51% 24%"
  />
  <path
    class="tree"
    fill-rule="evenodd"
    d="M10.35 9.032a.75.75 0 01.502.934l-.671 2.234 3.215-1.409-.248-.825a.75.75 0 111.436-.432l2.613 8.697a1.75 1.75 0 01-1.676 2.254H8.48a1.75 1.75 0 01-1.676-2.254l2.613-8.697a.75.75 0 01.934-.502zm3.48 3.206l-4.216 1.849-.827 2.754 5.758-2.224-.715-2.379zm-5.59 6.425v-.003l6.738-2.602.783 2.605a.25.25 0 01-.24.322H8.48a.25.25 0 01-.24-.322z"
    clip-rule="evenodd"
  />
</svg>

<style>
  .star {
    fill: var(--m3-primary);
  }

  .tree {
    fill: var(--m3-secondary);
  }
</style>
