<template>
  <div class="TextArea">
    <div class="TextArea_input" @input="(e) => value = e.target.innerText" v-model="value" contenteditable="true">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TextArea',
    data () {
      return {
        value: ''
      }
    },
    watch: {
      value: {
        immediate: true,
        handler () {
          setTimeout(() => this.$data.height = this.$refs.resizer ? this.$refs.resizer.scrollHeight : 0)
        }
      }
    }
  }
</script>

<style scoped>
  .TextArea {
    width: 100%;
    position: relative;
  }
  
  .TextArea_input {
    min-height: 75px;
    padding: 6px 12px 0;
    appearance: none;
    display: block;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    word-wrap: break-word;
    font: var(--font-m);
    background-color: var(--pure-white);
  }
</style>