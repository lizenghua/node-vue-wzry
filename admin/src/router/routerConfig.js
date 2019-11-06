/*
 * @message: 路由配置
 * @Author: lzh
 * @since: 2019-11-05 11:45:32
 * @lastTime: 2019-11-06 10:10:29
 * @LastAuthor: Do not edit
 */
export const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/components/Layouts/index.vue"),
    redirect: "/categories/list",
    children: [
      {
        path: "/categories/list",
        name: "categoryList",
        component: () => import("@/views/categories/list.vue")
      },
      {
        path: "/categories/create",
        name: "categoryCreate",
        component: () => import("@/views/categories/edit.vue")
      },
      {
        path: "/categories/edit/:id",
        name: "categoryEdit",
        component: () => import("@/views/categories/edit.vue"),
        props: true
      },
      {
        path: "/items/list",
        name: "itemList",
        component: () => import("@/views/items/list.vue")
      },
      {
        path: "/items/create",
        name: "itemCreate",
        component: () => import("@/views/items/edit.vue")
      },
      {
        path: "/items/edit/:id",
        name: "itemEdit",
        component: () => import("@/views/items/edit.vue"),
        props: true
      },
      {
        path: "/heroes/list",
        name: "heroList",
        component: () => import("@/views/heroes/list.vue")
      },
      {
        path: "/heroes/create",
        name: "heroCreate",
        component: () => import("@/views/heroes/edit.vue")
      },
      {
        path: "/heroes/edit/:id",
        name: "heroEdit",
        component: () => import("@/views/heroes/edit.vue"),
        props: true
      }
    ]
  }
];
