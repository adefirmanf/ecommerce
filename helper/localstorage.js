export default {
  getItem: {
    json(key) {
      return JSON.parse(localStorage.getItem(key))
    }
  },
  setItem: {
    json(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  initItem: {
    json(key, value) { }
  }
}