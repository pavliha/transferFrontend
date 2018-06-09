import React from 'react'
import TextField from '@material-ui/core/es/TextField/TextField'
import Geosuggest from '../../Geosuggest'

export default {
  from: {
    label: 'Откуда едите?',
    component: <Geosuggest name="from" fullWidth label="Город" />,
  },

  to: {
    label: 'Куда едите?',
    component: <Geosuggest name="to" fullWidth label="Город" />,
  },

  time: {
    label: 'Во сколько время едите?',
    component: <TextField name="time" fullWidth label="Время" />,
  },

  date_from: {
    label: 'Какого числа выезжаете?',
    component: <TextField name="date_from" fullWidth label="Время" />,
  },

  pictures: {
    label: 'Искать по картинке?',
    component: <TextField name="pictures" fullWidth label="Что на картинке?" />,
  },

  dimensions: {
    label: 'Какие размеры подойдут?',
    component: <TextField name="dimensions" fullWidth label="Размеры" />,
  },

  weight: {
    label: 'Какой вес возьмете?',
    component: <TextField name="weight" fullWidth label="Вес" />,
  },

  date_to: {
    label: 'До какой даты доставите?',
    component: <TextField name="date_to" fullWidth label="Дата" />,
  },

  volume: {
    label: 'Какой обьем у вас поместится?',
    component: <TextField name="volume" fullWidth label="Обьем" />,
  },

  description: {
    label: 'Найти по описанию?',
    component: <TextField name="description" fullWidth label="Описание" />,
  },

  transport_type: {
    label: 'Какой у вас тип траспорта?',
    component: <TextField name="transport_type" fullWidth label="Выбрать" />,
  },

  payment: {
    label: 'Сколько планируете заработать?',
    component: <TextField name="payment" fullWidth label="Сумма" />,
  },
}
