<template>
  <div class="PostBody">
    <p class="PostBody_author">
      {{ post.user.name }}
      <span class="PostBody_id">{{ post.user.id }}</span>
      <span class="PostBody_date">{{ parsedDate }}</span>
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
  
  import PostParser from '@/mixins/PostParser'
  
  export default {
    name: 'PostBody',
    components: { HashtagGeneric, MentionGeneric },
    mixins: [ PostParser ],
    props: {
      post: { type: Object }
    },
    data () {
      return {
        time: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
    },
    mounted () {
      setInterval(() => {
        let date_future = new Date(this.post.creation_date)
        let date_now = new Date()

        this.$data.time.seconds = Math.floor((date_now - date_future) / 1000)
        this.$data.time.minutes = Math.floor(this.$data.time.seconds / 60)
        this.$data.time.hours = Math.floor(this.$data.time.minutes / 60)
        this.$data.time.days = Math.floor(this.$data.time.hours / 24)

        this.$data.time.hours = this.$data.time.hours - (this.$data.time.days * 24)
        this.$data.time.minutes = this.$data.time.minutes - (this.$data.time.days * 24 * 60) - (this.$data.time.hours * 60)
        this.$data.time.seconds = this.$data.time.seconds - (this.$data.time.days * 24 * 60 * 60) - (this.$data.time.hours * 60 * 60) - (this.$data.time.minutes * 60)
      }, 1000);
    },
    computed: {
      postText () {
        return this.parsePost(this.post.content)
      },
      parsedDate () {
        let result = 'Il y a '
        
        if (this.$data.time.days + this.$data.time.hours + this.$data.time.minutes + this.$data.time.seconds == 0) {
          result = ''
        } else if (this.$data.time.days + this.$data.time.hours + this.$data.time.minutes == 0) {
          result += `${this.$data.time.seconds} seconde`
          if (this.$data.time.seconds > 1) result += 's'
        } else if (this.$data.time.days + this.$data.time.hours == 0) {
          result += `${this.$data.time.minutes} minute`
          if (this.$data.time.minutes > 1) result += 's'
        } else if (this.$data.time.days == 0) {
          result += `${this.$data.time.hours} heure`
          if (this.$data.time.hours > 1) result += 's'
        } else {
          result += `${this.$data.time.days} jour`
          if (this.$data.time.days > 1) result += 's'
        }
        
        return result
      }
    }
  }
</script>

<style scoped>
  .PostBody {
    min-height: 90px;
    padding-bottom: 10px;
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
  
  .PostBody_id {
    color: var(--cloud-grey);
  }
</style>