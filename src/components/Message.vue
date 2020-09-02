<template>
  <div>
    <div class="message" v-for="(message,index) in messages" v-bind:key="index" v-bind:class="{ own: message.isOwn }">
      <div style="margin-top: 5px"></div>
      <div class="content">
        <div v-html="message.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'messages'
  ],
}
</script>
