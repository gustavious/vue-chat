<script src="main.js"></script>
<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="FoodBot Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <ChatWindow/>
    </v-main>
  </v-app>
</template>

<script>
import ChatWindow from './components/ChatWindow';

export default {
  name: 'App',

  components: {
    ChatWindow,
  },
};
</script>
