class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then(response => {
      const { data } = response

      data.forEach(character => {
        const {id, name, occupation, weapon, cartoon} = character
        console.log(character)
      })
    })
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(response => {
      const { data } = response

      data.find(character => {
        const {id, name, occupation, weapon, cartoon} = character
        console.log(character)
      })
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
