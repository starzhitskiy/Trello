const lists = document.querySelectorAll('.list')

function addTask () {
  const btn = document.querySelector('.add__btn')
  const addBtn = document.querySelector('.add__item-btn')
  const cancelBtn = document.querySelector('.cancel__item-btn')
  const textarea = document.querySelector('.textarea')
  const form = document.querySelector('.form')

  let value

  btn.addEventListener('click', () => {
    form.style.display = 'block'
    btn.style.display = 'none'
    addBtn.style.display = 'none'

    textarea.addEventListener('input', e => {
      value = e.target.value

      if (value) {
        addBtn.style.display = 'block'
      } else {
        addBtn.style.display = 'none'
      }
    })
  })

  function clear() {
    textarea.value = ''
    value = ''
    form.style.display = 'none'
    btn.style.display = 'flex'
  }

  cancelBtn.addEventListener('click', () => {
    clear()
  })
  

  addBtn.addEventListener('click', () => {
    const newItem = document.createElement('div')
    newItem.classList.add('list__item')
    newItem.draggable = true
    newItem.textContent = value
    lists[0].append(newItem)

    clear()
  })
}

addTask()