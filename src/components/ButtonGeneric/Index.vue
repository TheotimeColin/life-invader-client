<template>
  <button class="ButtonGeneric" type="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "ButtonGeneric"
  }
</script>

<style>
  .ButtonGeneric {
    min-width: 150px;
    max-width: 90%;
    padding: 15px;
    border-radius: 40px;
    font: var(--font-xs);
    background: var(--main-gradient);
    color: var(--pure-white);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
  }
</style>