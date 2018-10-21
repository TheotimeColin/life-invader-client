<template>
  <div class="TextArea">
    <textarea class="TextArea_input" :style="{ height: `${height}px` }" v-model="value" placeholder="Exprimez-vous">
    </textarea>
    
    <textarea class="TextArea_input TextArea_input--resizer" ref="resizer">
      {{ value }}
    </textarea>
  </div>
</template>

<script>
  export default {
    name: 'TextArea',
    data () {
      return {
        value: '',
        height: 0
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
    resize: none;
    border-radius: 4px;
    word-wrap: break-word;
    font: var(--font-m);
  }
  
  .TextArea_input--resizer {
    position: absolute;
    width: 100%;
    visibility: hidden;
    pointer-events: none;
    height: 0;
  }
</style>