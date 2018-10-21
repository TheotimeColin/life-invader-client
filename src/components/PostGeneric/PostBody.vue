<template>
  <div class="PostBody">
    <p class="PostBody_author">
      Kelly Markland
      <span class="PostBody_date">Aujourd'hui, à 18h02</span>
    </p>
    <div class="PostBody_text">
      <template v-for="item in postText">
        <template v-if="item.type == 'hashtag'"><HashtagGeneric>{{ item.content }}</HashtagGeneric>{{ ' ' }}</template>
        <template v-else-if="item.type == 'mention'"><MentionGeneric>{{ item.content }}</MentionGeneric>{{ ' ' }}</template>
        <template v-else>{{ item.content }} </template>
      </template>
    </div>
  </div>
</template>

<script>
  import HashtagGeneric from '@/components/HashtagGeneric'
  import MentionGeneric from '@/components/MentionGeneric'
  
  export default {
    name: "PostBody",
    components: { HashtagGeneric, MentionGeneric },
    props: {
      content: { type: String, default: '' }
    },
    computed: {
      postText () {
        let result = this.content
        
        result = result.split(' ')
        result = result.map((string) => {
          let item = {}
          
          switch (string[0]) {
            case '#': item.type = 'hashtag'; break
            case '@': item.type = 'mention'; break
            default: item.type = 'text'; break
          }
          
          item.content = string
          
          return item
        })
        
        console.log(result)
        
        return result
      }
    }
  }
</script>

<style scoped>
  .PostBody {
    min-height: 100px;
    padding-bottom: 20px;
  }
  
  .PostBody_author {
    font: var(--font-s);
    font-weight: bold;
    margin: 0 0 5px;
  }
  
  .PostBody_date {
    font: var(--font-xs);
    color: var(--cloud-grey);
    font-weight: normal;
    margin-left: 5px;
  }
  
  .PostBody_text {
    font: var(--font-m);
  }
</style>