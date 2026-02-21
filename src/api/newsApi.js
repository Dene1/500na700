const URL = "http://localhost:3002/news"

const newsApi = {
  getAll: () => fetch(URL).then((res) => res.json())
}

export default newsApi