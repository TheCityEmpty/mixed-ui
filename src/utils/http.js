
const http = (url) => {
  return new Promise((resolve, reject) => {
    if (url) {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url)

      xhr.onload = (state) => {
        const { status, response } = state.target
        if (status >= 200 && status < 400) {
          resolve(response)
        } else {
          reject(response)
        }
      }

      xhr.send(null)
    }
  })
}

export default http
