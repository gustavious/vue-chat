const ChatModule = {
  state: {
    messages: []
  },
  mutations: {
    setChats (state, payload) {
      payload["0"] = {name: "Default"}
      state.chats = payload
    }
  },
  actions: {
    sendMessage (context, payload) {
      const message = {
        user: payload.username,
        content: payload.content,
        date: payload.date
      }
      context.getters.messages.push(message)
    }
  },
  getters: {
    messages (state) {
      return state.messages
    }
  }
}

export default ChatModule
