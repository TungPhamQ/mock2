import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ActivityView from "../views/ActivityView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import NewsView from "@/views/NewsView.vue";
import TechnologyView from "@/views/TechnologyView.vue";
import MusicView from "@/views/MusicView.vue";
import FeedbackView from "@/views/FeedbackView.vue";
import SurveyView from "@/views/SurveyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post",
    name: "post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostView.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: ActivityView,
  },
  {
    path: "/bookmark",
    name: "bookmark",
    component: BookmarkView,
  },

  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/technology",
    name: "Technology",
    component: TechnologyView,
  },
  {
    path: "/music",
    name: "Music",
    component: MusicView,
  },
  {
    path: "/feedback",
    name: "feedback",
    component: FeedbackView,
  },
  {
    path: "/survey",
    name: "Survey",
    component: SurveyView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
