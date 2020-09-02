import axios from 'axios';

const ChatModule = {
  state: {
    messages: []
  },
  mutations: {
    pushMessage (state, payload) {
      console.log('Mutation pushMessage received:', state, payload);
      state.messages.push(payload);
    },
    pushResponse (state, payload) {
      console.log('Mutation pushResponse received:', state, payload);
      const botMessage = {
        content: payload.answer,
        date: new Date(),
        classification: payload.classification,
        isOwn: false,
      }
      state.messages.push(botMessage);
    }
  },
  actions: {
    async sendMessage (context, payload) {
      const message = {
        content: payload.content,
        date: payload.date,
        isOwn: true,
      }
      context.commit("pushMessage", message)
      let botRes = 'No pudimos recibir tu mensaje. Intentalo nuevamente.';
      try {
        const config = {
          method: 'post',
          url: 'http://localhost:8005/message',
          data:{
            message: message.content,
          }
        }
        const { data: { answer, classification } } = await axios(config)
        botRes = { answer, classification };
      } catch (error) {
        console.warn('Error: ', error)
      }
      context.commit("pushResponse", botRes)
    }
  },
  getters: {
    messages (state) {
      return state.messages
    }
  }
}

export default ChatModule
