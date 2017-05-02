import Vue from 'vue'
import App from './app.vue'

export default function () {
  const app = new Vue({
    render: h => h(App)
  });
  return { app };
}
