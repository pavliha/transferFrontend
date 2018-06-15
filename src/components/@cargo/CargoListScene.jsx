import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import FilterForm from './FilterForm'
import CargoList from './CargoList'

const CargoListScene = () =>
  <Container className="mt-4">
    <Grid container justify="space-between">
      <Grid item sm={12} md={6} lg={4}>
        <FilterForm />
      </Grid>
      <Grid item md={8} xs={9} className="pl-3">
        <CargoList />
      </Grid>
    </Grid>
  </Container>

export default CargoListScene
