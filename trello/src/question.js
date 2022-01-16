export class Question {
  static create(question) {
    return fetch('https://trello-clone-test1-default-rtdb.firebaseio.com/questions.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json)
      .then(response => {
        console.log(response);
      })
  }

  static fetch(token) {
   return fetch(`https://trello-clone-test1-default-rtdb.firebaseio.com/questions.json?aut=${token}`)
      .then(response => response.json())
      .then(question => {
        console.log('Questions', questions);
      })
  }
}