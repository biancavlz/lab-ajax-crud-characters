class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then(response => {
      const { data } = response
      document.querySelector('.characters-container > div:first-child').remove()

      data.forEach(character => {
        const {id, name, occupation, weapon, cartoon} = character
        console.log(character)

        const newCharacterHTML = `
        <div class="character-info" id=${id}>
          <div class="name">${name}</div>
          <div class="occupation">${occupation}</div>
          <div class="cartoon">${cartoon}</div>
          <div class="weapon">${weapon}</div>
        </div>`;

      document.querySelector('.characters-container').innerHTML += newCharacterHTML;
      })
    })
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(response => {
      const { data } = response
      document.querySelector('.characters-container > div:first-child').remove()
      
      console.log(data)
        const {id, name, occupation, weapon, cartoon} = data

        const newCharacterHTML = `
        <div class="character-info" id=${id}>
          <div class="name">${name}</div>
          <div class="occupation">${occupation}</div>
          <div class="cartoon">${cartoon}</div>
          <div class="weapon">${weapon}</div>
        </div>`;

      document.querySelector('.characters-container').innerHTML += newCharacterHTML;
    })
  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters`, {name, occupation, weapon, cartoon})
      .then(response => {
        const { data } = response
        const { id, name, occupation, weapon, cartoon } = character

      }).catch(err => {
      console.error(err);
    })
  }

  updateOneRegister (id) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {name, occupation, weapon, cartoon})
      .then(response => {
        const { data } = response
        const { id, name, occupation, weapon, cartoon } = character

      }).catch(err => {
      console.error(err);
    })
  }

  deleteOneRegister () {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('deleted successfully!!')

      }).catch(err => {
      console.error(err);
    })
  }
}
