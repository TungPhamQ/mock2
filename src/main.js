import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faHouse,
  faPaperPlane,
  faHeart,
  faBookmark,
  faLightbulb,
  faLaptop,
  faPlay,
  faMessage,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faHouse,
  faPaperPlane,
  faHeart,
  faBookmark,
  faLightbulb,
  faLaptop,
  faPlay,
  faMessage,
  faClipboard
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
