import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import FilterCard from './FilterCard'

const CargoScene = () =>
  <Container className="mt-4">
    <Grid container>
      <Grid item sm={12} md={6} lg={4} xl={3}>
        <FilterCard />
      </Grid>
    </Grid>
  </Container>

export default CargoScene
