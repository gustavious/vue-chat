const ChatModule = {
  state: {
    messages: []
  },
  mutations: {
    pushMessage (state, payload) {
      console.log('Mutation received:', state, payload);
      state.messages.push(payload);
    }
  },
  actions: {
    sendMessage (context, payload) {
      const message = {
        content: payload.content,
        date: payload.date
      }
      context.commit("pushMessage", message)
    }
  },
  getters: {
    messages (state) {
      return state.messages
    }
  }
}

export default ChatModule
