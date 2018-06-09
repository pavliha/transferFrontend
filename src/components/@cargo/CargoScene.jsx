import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import FilterCard from './FilterCard'
import CargoList from './CargoList'

const CargoScene = () =>
  <Container className="mt-4">
    <Grid container justify="space-between">
      <Grid item sm={12} md={6} lg={4} xl={3}>
        <FilterCard />
      </Grid>
      <Grid item md={8} xs={9} className="pl-3">
        <CargoList />
      </Grid>
    </Grid>
  </Container>

export default CargoScene
