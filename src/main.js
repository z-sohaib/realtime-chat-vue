import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCJ1bsT9am2Xg-3t2LzWIc55xXvB8SNcpY",
  authDomain: "realtime-chat-vue-de598.firebaseapp.com",
  projectId: "realtime-chat-vue-de598",
  storageBucket: "realtime-chat-vue-de598.appspot.com",
  messagingSenderId: "1010831033634",
  appId: "1:1010831033634:web:4d550ea1076ff268c5917b"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
