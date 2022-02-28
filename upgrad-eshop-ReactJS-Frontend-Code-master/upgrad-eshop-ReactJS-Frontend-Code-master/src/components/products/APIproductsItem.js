export function getList() {
  return fetch('http://localhost:5000/api/products')
    .then(data => data.json())
}

export function setItem(item) {
  return fetch('http://localhost:5000/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZmM2YmVkYzdkZWZjMzFlMDVmYTZlIn0sImlhdCI6MTY0NTIwMTA4Nn0.W1iMp54yHKyluKeinCforYz8BO0IU9nLtMvY8ZiiraA'
    },
    body: JSON.stringify({ item })
  })
    .then(data => data.json())
}