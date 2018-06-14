import Yup from 'yup'
import moment from 'moment'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({
    from: '',
    to: '',
    time: '18:30',
    date_from: moment().format('YYYY-MM-DD'),
    date_to: moment().format('YYYY-MM-DD'),
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    from: Yup.object().required('Это поле является обязательным для заполнения!'),
    to: Yup.object().required('Это поле является обязательным для заполнения!'),
    date_from: Yup.date(),
    date_to: Yup.date(),
    pictures: Yup.array(),
    dimensions: Yup.string(),
    weight: Yup.number(),
    volume: Yup.number(),
    description: Yup.string(),
    transport_type: Yup.string(),
    payment: Yup.number(),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(values)
      setSubmitting(false)
    }, 100)
  },

  displayName: 'CargoForm', // helps with React DevTools
})
