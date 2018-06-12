import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import Button from '@material-ui/core/es/Button/Button'
import AdditionalFilters from './AdditionalFilters'
import Filters from './Filters'
import connector from './connector'

const FilterCard = ({ selected }) =>
  <Card>
    <CardContent>
      <Filters />
      <AdditionalFilters />
    </CardContent>
    {!!selected.length &&
    <CardActions>
      <Button fullWidth variant="raised" size="large" color="primary">
        Искать
      </Button>
    </CardActions>
    }
  </Card>

FilterCard.propTypes = {
  selected: PropTypes.array.isRequired,
}

export default connector(FilterCard)
