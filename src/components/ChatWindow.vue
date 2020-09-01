<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
      <v-col sm="14" style="position: relative;">
        <div class="chat-container" ref="chatContainer">
          <message :messages="messages" class="message own"></message>
        </div>
        <div class="typer">
          <input type="text" placeholder="Escribe un mensaje..." v-on:keyup.enter="sendMessage" v-model="content">
          <v-icon>mdi-desktop-classic</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from './Message.vue'
export default {
  data () {
    return {
      content: '',
      chatMessages: [],
    }
  },
  props: [],
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
  methods: {
    loadChat () {
      this.chatMessages = []
    },
    sendMessage () {
      if (this.content !== '') {
        this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: this.id })
        this.content = ''
      }
    },
  }
}
</script>

<style>
.typer{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 4.9rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  padding-left: 2%;
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
.chat-container {
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
