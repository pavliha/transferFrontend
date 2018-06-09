import React from 'react'
import Card from '@material-ui/core/es/Card/Card'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import Button from '@material-ui/core/es/Button/Button'
import AdditionalFilters from './AdditionalFilters'
import Filters from './Filters'

const FilterCard = () =>
  <Card>
    <CardContent>
      <Filters />
      <AdditionalFilters />
    </CardContent>
    <CardActions>
      <Button fullWidth variant="raised" size="large" color="primary">
        Искать
      </Button>
    </CardActions>
  </Card>

FilterCard.propTypes = {}

export default FilterCard
