const login = document.querySelector('.login')
const register = document.querySelector('.register')
const registration = document.querySelector('.forma')
const forms = document.querySelector('.forms')
const log = document.querySelector('.button__log')
const close = document.querySelector('.button__close')

log.addEventListener('click', ()=> {
  registration.style.display = 'block';
})

login.addEventListener('click', () => {
  forms.style.left = '100px';
  login.style.backgroundColor = '#3c71f2';
  register.style.backgroundColor = '#222b41';
})

register.addEventListener('click', () => {
  forms.style.left = '-210px';
  register.style.backgroundColor = '#3c71f2';
  login.style.backgroundColor = '#222b41';
})

close.addEventListener('click', ()=> {
  registration.style.display = 'none';
})