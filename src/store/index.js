import Vue from "vue";
import Vuex from "vuex";
import products from '../data/products'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products,
    cartItems: [],
  },
  getters: {
    products: (state) => state.products,
    cartItems: (state) => state.cartItems,
    cartQuantity: state => {
              return state.cartItems.reduce((acc, cartItem) => {
                return cartItem.quantity + acc;
              }, 0);
            },
    cartTotal: state => {
      let total = 0;
      state.cartItems.forEach(product => {
        total += product.price * product.quantity;
      });
      return total.toFixed(2);
    }      
  },

  mutations: {
    EMPTY_CART(state){
      state.cartItems = []
    },
    REMOVE_CART(state, index) {
      state.cartItems.splice(index, 1);
    },
    DECREMENT_ITEM_QUANTITY(state, product) {
      product.quantity--;
    },
     PUSH_PRODUCT_TO_CART (state, product) {
        state.cartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        })
      },
      INCREMENT_ITEM_QUANTITY (state, product) {
        product.quantity++
      },
  },
  actions: {
    addItem(context, product) {
      const cartItem = context.state.cartItems.find(item => item.id === product.id)
      if (!cartItem) {
        context.commit('PUSH_PRODUCT_TO_CART', product)
      } else {
        context.commit('INCREMENT_ITEM_QUANTITY', cartItem)
      }
    },
    removeItem({ commit, state }, product) {
      const cartItem = state.cartItems.find(
        element => element.id === product.id
      );
      if (cartItem) {
        if (cartItem.quantity <= 1) {
          const itemIndex = state.cartItems.findIndex(x => x.id === product.id);
          commit("REMOVE_CART", itemIndex);
        } else {
          commit("DECREMENT_ITEM_QUANTITY", cartItem);
        }
      }
    },
    pay(context) {
      context.commit("EMPTY_CART");
    },
  },
  modules: {},
});


