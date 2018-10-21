<template>
  <button class="ButtonGeneric" :class="modifierClasses" type="button">
    <slot></slot>
  </button>
</template>

<script>
  import Classes from '@/mixins/Classes'
  export default {
    name: 'ButtonGeneric',
    mixins: [ Classes ],
    props: {
      modifiers: { type: Array, default: () => [] }
    }
  }
</script>

<style>
  .ButtonGeneric {
    display: block;
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
  
  .ButtonGeneric--tiny {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    padding: 5px 8px;
    text-align: center;
    letter-spacing: 2px;
    font: var(--font-xxs);
  }
</style>