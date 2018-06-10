export default {
  required: {
    message: 'Это поле обязательно для заполенения',
    validate(value) {
      return !value
    },
  },
  location: {
    message: 'Это поле обязательно для заполенения',
    validate(value) {
      return !value
    },
  },
}
