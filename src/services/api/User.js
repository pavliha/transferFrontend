/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import Http from '../Http'
import Token from '../Token'
import Cache from '../Cache'

class User {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)
    Token.remember(token, refreshToken)

    const user = JWT(token).data
    this.save(user)

    return user
  }

  async login(credentials) {
    const { token, refreshToken } = await Http.post('/login', credentials)
    Token.remember(token, refreshToken)

    const user = JWT(token).data
    this.save(user)

    return user
  }

  // noinspection JSUnusedGlobalSymbols
  logout() {
    Cache.put('user', null)
  }

  save(user) {
    Cache.put('user', user)
  }
}

export default new User()
