const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    moto: [],
    basket: [],
    counter: 0,
    show: false,
  },
  methods: {
    async addList() {
      const url = 'https://api.npoint.io/113037f410826dce9b7c'
      const responce = await fetch(url)
      const item = await responce.json()
      this.goods = item
    },

    async addMoto() {
      const url = 'https://api.npoint.io/b98ce1702060989d6344'
      const responce = await fetch(url)
      const item = await responce.json()
      this.moto = item
    },

    async addToBasket(e) {
      const itemId = e.target.getAttribute('itemId')
      const item = this.goods.find((i) => i.name == itemId)
      this.basket.push(item)
      this.counter += 1
      show: false
    },

    async addToBasketMoto(e) {
      const itemId = e.target.getAttribute('itemId')
      const item = this.moto.find((i) => i.name == itemId)
      this.basket.push(item)
      console.log(this.basket)
      this.counter += 1
      show: false
    },

    async deleteBasket(item) {
      this.basket.splice(item, 1)
      this.counter -= 1
    },

    async showBasket() {
      this.show = true
    },
    async closeBasket() {
      this.show = false
    },
  },
  async mounted() {
    await this.addList()
    await this.addMoto()
  },
})
