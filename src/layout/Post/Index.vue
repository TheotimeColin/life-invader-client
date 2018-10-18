<template>
  <div class="Post">
    <PostGeneric class="Post_main" />
  </div>
</template>

<script>
  import PostGeneric from '@/components/PostGeneric'
  
  export default {
    name: "Post",
    components: { PostGeneric }
  }
</script>

<style lang="scss" scoped>
  .Post {
    padding: 5px 0 0;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--mercury-grey);
    transition: background-color 100ms ease;
     
    &:hover {
      background-color: var(--mercury-grey);
    }
  }
</style>