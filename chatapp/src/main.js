import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase';

require("firebase/firestore");
const config = {
  apiKey: "AIzaSyBXCz231LQOx24va2UVj9qAflZcvZgQNEE",
  authDomain: "chat-app-6e338.firebaseapp.com",
  databaseURL: "https://chat-app-6e338.firebaseio.com",
  projectId: "chat-app-6e338",
  storageBucket: "",
  messagingSenderId: "1061504962982"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

window.db = db;

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
