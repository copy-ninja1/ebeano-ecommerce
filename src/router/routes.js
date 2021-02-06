/**
 *
 * @param {String} file - this file name of the page
 */
const page = file => import(`pages/${file}.vue`);

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
    path: "/category/:category",
    component: () => import("layouts/Blank.vue"),
    children: [
      { path: "", component: () => import("pages/_Category/_Index.vue") },
      // {
      //   path: "/category/:category/:product",
      //   component: () => import("pages/_Category/_Product.vue")
      // }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/:productTitle", component: () => import("pages/_Product.vue") }
    ]
  },

  {
    path: "/account",
    redirect: "/account/login",
    component: () => import("layouts/AccountLayout.vue"),
    children: [
      {
        path: "/account/login",
        name: "login",
        component: () => page("Accounts/Login")
      },
      {
        path: "/account/signup",
        name: "signup",
        component: () => page("Accounts/SignUp")
      },
      {
        path: "/forgot-password",
        name: "forgotPassword",
        component: () => page("Accounts/ForgotPassword")
      }
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
