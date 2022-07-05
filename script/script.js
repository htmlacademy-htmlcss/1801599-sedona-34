document.querySelector('.interested-button').addEventListener('click', function(evt){
  evt.preventDefault()
  document.querySelector('.modal-container').classList.remove('modal-container-close')
})
document.querySelector('.modal-close-button').addEventListener('click', function(evt){
  evt.preventDefault()
  document.querySelector('.modal-container').classList.add('modal-container-close')
})
