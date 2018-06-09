import React from 'react'
import Button from '@material-ui/core/es/Button/Button'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Grid from '@material-ui/core/es/Grid/Grid'
import Card from '@material-ui/core/es/Card/Card'
import Container from '../Container'
import Filters from './Filters'
import AdditionalFilters from './AdditionalFilters'

const CargoScene = () =>
  <Container className="mt-4">
    <Grid container>
      <Grid item lg={4} xl={3}>
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
      </Grid>
    </Grid>
  </Container>

export default CargoScene
