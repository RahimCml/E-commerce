import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Customers from "../views/Customers.vue";
import Sellers from "../views/Sellers.vue";
import CustomerView from "../views/Customer.vue";
import ProductView from "../views/Product.vue";
import SellerView from "../views/Seller.vue";


Vue.use(VueRouter)

const routes = [
	{
		path: "/products",
		name: "Products",
		component: Products
	},
	{
		path: "/customers",
		name: "Customers",
		component: Customers
	},
	{
		path: "/sellers",
		name: "Sellers",
		component: Sellers
	},
	{
		path: '/products/:productId',
		name: 'ProductView',
		component: ProductView
	},
	{
		path: "/customers/:customerId",
		name: "CustomerView",
		component: CustomerView
	},
  {
		path: "/sellers/:sellerId",
		name: "SellerView",
		component: SellerView
  },
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
