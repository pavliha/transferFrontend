/* eslint-disable prefer-destructuring */
import React from 'react'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import truncate from 'lodash/truncate'
import PropTypes from 'prop-types'
import CargoBadge from './CargoBadge'
import connector from '../../connector'

const styles = theme => ({
  photo: {
    borderRadius: '5%',
    margin: 2,
  },
})

const CargoBadges = ({ badges, classes }) =>
  badges.map((badge, index) => {
    let label
    let value

    switch (badge.key) {
      case 'time':
        label = 'время'
        value = moment(badge.value).format('LT')
        break
      case 'date_from':
        label = 'дата отправления'
        value = moment(badge.value).format('DD MMMM YYYY')
        break
      case 'date_to':
        label = 'дата прибытия'
        value = moment(badge.value).format('DD MMMM YYYY')
        break
      case 'pictures':
        label = 'фото'
        value = badge.value.map(img => <Avatar className={classes.photo} src={img} />)
        break
      case 'weight':
        label = 'Вес'
        value = badge.value
        break
      case 'dimensions':
        label = 'размеры'
        value = badge.value
        break
      case 'volume':
        label = 'обьём'
        value = badge.value
        break
      case 'description':
        label = 'описание'
        value = truncate(badge.value)
        break
      case 'transport_type':
        label = 'транспорт'
        value = badge.value
        break

      case 'payment':
        label = 'оплата'
        value = badge.value
        break

      default:
        label = badge.key
        value = badge.value
    }
    return <CargoBadge key={index} label={label} value={value} />
  })

CargoBadges.propTypes = {
  classes: PropTypes.object.isRequired,
  badges: PropTypes.array.isRequired,
}

// noinspection JSUnusedGlobalSymbols
export default connector(withStyles(styles)(CargoBadges))
