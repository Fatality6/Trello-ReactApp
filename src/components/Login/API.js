export async function ApiLogin(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export async function ApiRegistration(credentials) {
  return fetch('http://localhost:8080/login/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export async function ApiGetUserBoards(id) {
  return fetch('http://localhost:8080/boards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {id}
  })
    .then(data => data.json())
}