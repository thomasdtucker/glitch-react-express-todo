export const fetchDreams = () =>
  fetch('/api/dreams')
    .then(data => data.json())
    .catch(error => {
        throw new Error(error.message)
    });

export const createDream = (dream) =>
  fetch('/api/dreams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dream })
    })
    .catch(error => {
        throw new Error(error.message)
    });