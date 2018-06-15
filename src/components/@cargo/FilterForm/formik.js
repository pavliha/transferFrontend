import Yup from 'yup'
import moment from 'moment'
import clean from 'lodash-clean'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({
    title: '',
    from: {
      formatted_address: '',
      geometry: {
        location: {
          lat: () => undefined,
          lng: () => undefined,
        },
      },
    },
    to: {
      formatted_address: '',
      geometry: {
        location: {
          lat: () => undefined,
          lng: () => undefined,
        },
      },
    },
    time: '',
    date_from: '',
    date_to: '',
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    title: Yup.string(),
    from: Yup.object(),
    to: Yup.object(),
    date_from: Yup.date(),
    date_to: Yup.date(),
    dimensions: Yup.string(),
    weight: Yup.number(),
    volume: Yup.number(),
    description: Yup.string(),
    transport_type: Yup.string(),
    payment: Yup.number(),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values, props)
    let form = {
      title: values.title,
      from: {
        address: values.from.formatted_address,
        lat: values.from.geometry.location.lat(),
        lng: values.from.geometry.location.lng(),
        placeId: values.from.place_id,
        date: values.date_from,
        time: values.time,
      },
      to: {
        address: values.to.formatted_address,
        lat: values.to.geometry.location.lat(),
        lng: values.to.geometry.location.lng(),
        placeId: values.to.place_id,
        date: values.date_to,
        time: values.time,
      },
      weight: values.weight ? `${values.weight} кг` : undefined,
      dimensions: values.dimensions,
      volume: values.volume ? `${values.volume} m³` : undefined,
      description: values.description,
      transport_type: values.transport_type,
      payment: values.payment ? `${values.payment} грн` : undefined,
    }

    form = clean(form)


    props.actions.cargo.filter({
      page: props.page,
      filter: form,
    })

    setSubmitting(false)
  },

  displayName: 'FilterForm', // helps with React DevTools
})
