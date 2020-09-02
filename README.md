# Vue Chat
Foodbot allows the user to communicate with a text classifier api.

![logo](https://github.com/gustavious/vue-chat/blob/master/src/assets/logo.png)

## Learnings
I haven't used vue in a while, but setting up a project is fairly easy. This web interface is made mainly with vuetify components and vuex as the data state management library. Vuex is a reactive data flow which is very similar to flux or redux, it's very easy to handle side effects with its implementation of actions and mutations.
Speaking of Vue, this repo uses just two main components. A window to store the chat and a Message componet to render the text each time a message is pushed by user interaction or as a response from the api.

### Main stack
    - Vue 2
    - Vuetify
    - Vuex
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#### What to improve:
- Tests
- Continue the implementation making a user session management
- Could actully be able to register a food order using this conversational flow
