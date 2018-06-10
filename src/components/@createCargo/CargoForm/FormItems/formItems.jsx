import React from 'react'
import moment from 'moment'
import TextField from '@material-ui/core/es/TextField/TextField'
import Geosuggest from '../../../Geosuggest'

export default {
  from: {
    label: 'Откуда забирать?',
    component: <Geosuggest name="from" fullWidth label="Город" />,
    validate: ['required', 'location'],
  },

  to: {
    label: 'Куда отвезти?',
    component: <Geosuggest name="to" fullWidth label="Город" />,
    validate: ['required', 'location'],
  },

  time: {
    label: 'Во сколько время забрать груз?',
    component: <TextField
      label="Время"
      type="time"
      fullWidth
      initial="07:30"
      InputLabelProps={{ shrink: true }}
      inputProps={{ step: 300 }}
    />,
  },

  date_from: {
    label: 'Какого числа забрать груз?',
    component: <TextField
      id="date"
      label="Дата"
      fullWidth
      type="date"
      initial={moment().format('YYYY-MM-DD')}
      InputLabelProps={{
        shrink: true,
      }}
    />,
  },

  pictures: {
    label: 'Добавить фотографий?',
    component: <TextField name="pictures" fullWidth label="Что на картинке?" />,
  },

  dimensions: {
    label: 'Какие габариты груза?',
    component: <TextField name="dimensions" fullWidth label="Размеры" />,
  },

  weight: {
    label: 'Какой вес?',
    component: <TextField name="weight" fullWidth label="Вес" />,
  },

  date_to: {
    label: 'До какой даты доставить?',
    component: <TextField name="date_to" fullWidth label="Дата" />,
  },

  volume: {
    label: 'Какой обьем?',
    component: <TextField name="volume" fullWidth label="Обьем" />,
  },

  description: {
    label: 'Добавить описание',
    component: <TextField name="description" fullWidth label="Описание" />,
  },

  transport_type: {
    label: 'Какой тип траспорта нужен?',
    component: <TextField name="transport_type" fullWidth label="Выбрать" />,
  },

  payment: {
    label: 'Сколько планируете заплатить?',
    component: <TextField name="payment" fullWidth label="Сумма" />,
  },
}
