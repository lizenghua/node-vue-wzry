/*
 * @message: 路由配置
 * @Author: lzh
 * @since: 2019-11-05 11:45:32
 * @lastTime: 2019-11-06 17:26:00
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
      },
      {
        path: "/articles/list",
        name: "articleList",
        component: () => import("@/views/articles/list.vue")
      },
      {
        path: "/articles/create",
        name: "articleCreate",
        component: () => import("@/views/articles/edit.vue")
      },
      {
        path: "/articles/edit/:id",
        name: "articleEdit",
        component: () => import("@/views/articles/edit.vue"),
        props: true
      },
      {
        path: "/ads/list",
        name: "adList",
        component: () => import("@/views/ads/list.vue")
      },
      {
        path: "/ads/create",
        name: "adCreate",
        component: () => import("@/views/ads/edit.vue")
      },
      {
        path: "/ads/edit/:id",
        name: "adEdit",
        component: () => import("@/views/ads/edit.vue"),
        props: true
      },
      {
        path: "/admin_users/create",
        name: "adminUsersCreate",
        meta: { title: "创建管理员" },
        component: () => import("@/views/adminUsers/edit.vue")
      },
      {
        path: "/admin_users/edit/:id",
        name: "adminUserEdit",
        meta: { title: "编辑管理员" },
        component: () => import("@/views/adminUsers/edit.vue"),
        props: true
      },
      {
        path: "/admin_users/list",
        name: "adminUserList",
        meta: { title: "管理员列表" },
        component: () => import("@/views/adminUsers/list.vue")
      }
    ]
  }
];
