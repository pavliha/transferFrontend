/* eslint-disable class-methods-use-this */

class Token {
  exists() {
    return localStorage.getItem('token') !== null
  }

  get() {
    const token = localStorage.getItem('token')
    if (!token) return false
    return `Bearer ${token.replace(/^"(.*)"$/, '$1')}`
  }

  remember(token, refreshToken) {
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)
  }
}

export default new Token()
