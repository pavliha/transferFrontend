/* eslint-disable class-methods-use-this */
import isEmpty from 'lodash/isEmpty'

class Validator {
  constructor(value, rules) {
    this.value = value
    this.rules = rules

    this.fails = this.fails.bind(this)
    this.validateAll = this.validateAll.bind(this)
    this.validate = this.validate.bind(this)
  }

  fails(callback) {
    const errors = this.validateAll()
    if (errors.length) callback(errors)
  }

  validateAll() {
    const errors = this.rules.map(this.validate)

    return errors.filter(e => e)
  }

  validate(rule) {
    const { validate, message, name } = rule

    if (validate(this.value)) {
      return { [name]: message }
    }

    return null
  }

  compose(messages) {
    if (isEmpty(messages)) {
      return false
    }

    if (messages.length === 1) {
      return Object.values(messages[0])[0]
    }

    return messages.join(', ')
  }
}

export default Validator
