
<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
      <v-col sm="10" style="position: relative;">
        <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer" >
          <message :messages="messages" @imageLoad="scrollToEnd"></message>
        </div>
        <div class="typer">
          <input type="text" placeholder="Type here..." v-on:keyup.enter="sendMessage" v-model="content">
            <v-icon>mdi-emoticon-outline</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from './parts/Message.vue'
export default {
  data () {
    return {
      content: '',
      chatMessages: [],
      emojiPanel: false,
      currentRef: {},
      loading: false,
      totalChatHeight: 0
    }
  },
  props: [
    'id'
  ],
  mounted () {
    this.loadChat()
  },
  components: {
    'message': Message,
  },
  computed: {
    messages () {
      console.log('Messages', this.$store.getters.messages);
      return this.$store.getters.messages
    },
  },
  watch: {
  },
  methods: {
    loadChat () {
      this.totalChatHeight = this.$refs.chatContainer.scrollHeight
      this.loading = false
      this.chatMessages = []
    },
    onScroll () {
      let scrollValue = this.$refs.chatContainer.scrollTop
      if (scrollValue < 100 && !this.loading) {
        this.totalChatHeight = this.$refs.chatContainer.scrollHeight
        this.loading = true
        let currentTopMessage = this.chatMessages[0]
        if (currentTopMessage === undefined) {
          this.loading = false
        }
      }
    },
    sendMessage () {
      if (this.content !== '') {
        this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: this.id })
        this.content = ''
      }
    },
    scrollToEnd () {
      this.$nextTick(() => {
        var container = this.$el.querySelector('.chat-container')
        container.scrollTop = container.scrollHeight
      })
    },
  }
}
</script>

<style>
.scrollable {
  overflow-y: auto;
  height: 90vh;
}
.typer{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 4.9rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
}
.typer input[type=text]{
  position: absolute;
  left: 2.5rem;
  padding: 1rem;
  width: 80%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
}
.chat-container{
  box-sizing: border-box;
  height: calc(100vh - 9.5rem);
  overflow-y: auto;
  padding: 10px;
  background-color: #f2f2f2;
}
.message{
  margin-bottom: 3px;
}
.message.own{
  text-align: right;
}
.message.own .content{
  background-color: lightskyblue;
}
.chat-container .username{
  font-size: 18px;
  font-weight: bold;
}
.chat-container .content{
  padding: 8px;
  background-color: lightgreen;
  border-radius: 10px;
  display:inline-block;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
  max-width: 50%;
  word-wrap: break-word;
}
@media (max-width: 480px) {
  .chat-container .content{
    max-width: 60%;
  }
}
</style>
