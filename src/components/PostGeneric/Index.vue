<template>
  <div class="PostGeneric">
    <PostProfile class="PostGeneric_left" />
    <div class="PostGeneric_right">
      <PostBody class="Post_main" :content="post.content" />
      <PostActions />
    </div>
  </div>
</template>

<script>
  import PostProfile from './PostProfile'
  import PostBody from './PostBody'
  import PostActions from './PostActions'
  
  export default {
    name: "PostGeneric",
    components: { PostProfile, PostBody, PostActions },
    props: {
      post: { type: Object, default: { content: '' } }
    }
  }
</script>

<style lang="scss" scoped>
  .PostGeneric {
    display: flex;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid var(--mercury-grey);
    transition: background-color 100ms ease;
     
    &:hover {
      background-color: var(--dreamy-grey);
    }
  }
  
  .PostGeneric_left {
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 20px;
  }
  
  .PostGeneric_right {
    flex-grow: 1;
  }
</style>