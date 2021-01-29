const routes = [
  {
    path: "/cart-overview",
    component: () => import("layouts/CartLayout.vue"),
    children: [{ path: "", component: () => import("pages/Cart.vue") }]
  },

  {
    path: "/search",
    component: () => import("layouts/SearchLayout.vue"),
    children: [{ path: "", component: () => import("pages/Search.vue") }]
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/:productTitle", component: () => import("pages/_Product.vue") }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
