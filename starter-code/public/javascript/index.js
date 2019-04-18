const charactersAPI = new APIHandler("http://localhost:1337")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.querySelector('[name="character-id"]').value
    console.log(id)
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.querySelector('[name="character-id-delete"]').value
    console.log(id)
    document.getElementById(id).remove()
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
