const charactersAPI = new APIHandler("http://localhost:1337")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    return charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
