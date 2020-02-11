import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    redirect:'/yqdt',
    component:()=>import(/* webpackChunkName: "INDEX" */ '../views/index.vue'),
    children:[
      {
        path: '/yqdt',
        name: 'yqdt',
        meta:{
          til:'疫情动态'
        },
        component: () => import(/* webpackChunkName: "yqdt" */ '../components/yqdt/yqdt.vue')
      },
      {
        path: '/qxmap',
        name: 'qxmap',
        meta:{
          til:'迁徙地图'
        },
        component: () => import(/* webpackChunkName: "qxmap" */ '../components/qxmap/qxmap.vue')
      },
      {
        path: '/hotsearch',
        name: 'hotsearch',
        meta:{
          til:'全民热搜'
        },
        component: () => import(/* webpackChunkName: "hotsearch" */ '../components/hotsearch/hotseach.vue')
      },
      {
        path: '/news',
        name: 'news',
        meta:{
          til:'实时播报'
        },
        component: () => import(/* webpackChunkName: "news" */ '../components/news/news.vue')
      }
    ]
  },
  {
    path:'*',
    redirect:'/yqdt'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router