export function isValid(value) {
  return value.length >= 10
}

export function createModal(title, content) {
  const modal = document.createElement('div')
  modal.classList.add('modal')

  modal.innerHTML = `
  <h1>${title}</h1>
  <div class="modal-content">${content}</div>
  `

  mui.overlay('on', modal);
}

export function auttWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyDCVYkgfcLlItwTCan9U1h6JC950MkDqyA'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.JSON())
    .then(data => data.idToken)
}