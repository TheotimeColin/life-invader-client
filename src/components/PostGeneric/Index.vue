<template>
  <div class="PostGeneric">
    <ProfilePicture class="PostGeneric_profile" />
    <div class="PostGeneric_body">
      <p class="PostGeneric_author">
        Kelly Markland
        <span class="PostGeneric_date">Aujourd'hui, à 18h02</span>
      </p>
      <div class="PostGeneric_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent at purus ante. Ut aliquet dolor vitae nulla porttitor pellentesque <HashtagGeneric>#MarkMyWords</HashtagGeneric> <HashtagGeneric>#Crazy</HashtagGeneric>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfilePicture from '@/components/ProfilePicture'
  import HashtagGeneric from '@/components/HashtagGeneric'
  
  export default {
    name: "PostGeneric",
    components: { ProfilePicture, HashtagGeneric }
  }
</script>

<style scoped>
  .PostGeneric {
    display: flex;
  }
  
  .PostGeneric_profile {
    flex-grow: 0;
    flex-shrink: 0;
    margin: 10px;
  }
  
  .PostGeneric_body {
    min-height: 120px;
  }
  
  .PostGeneric_author {
    font: var(--font-s);
    font-weight: bold;
    margin: 14px 0 10px;
  }
  
  .PostGeneric_date {
    font: var(--font-xs);
    color: var(--cloud-grey);
    font-weight: normal;
    margin-left: 5px;
  }
  
  .PostGeneric_text {
    font: var(--font-m);
  }
</style>