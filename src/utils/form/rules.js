export default [
  {
    name: 'required',
    message: 'Это поле обязательно для заполенения',
    validate(value) {
      return !value
    },
  },
]
