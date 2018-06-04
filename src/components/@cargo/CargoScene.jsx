/* eslint-disable react/forbid-prop-types */
import React from 'react'
import TextField from '@material-ui/core/es/TextField/TextField'
import Button from '@material-ui/core/es/Button/Button'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Typography from '@material-ui/core/es/Typography/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import Card from '@material-ui/core/es/Card/Card'
import Container from '../Container'

const CargoScene = () =>
  <Container className="mt-4">
    <Grid container>
      <Grid item md={3}>
        <Card>
          <CardContent>
            <div className="mb-3">
              <Typography variant="subheading">Откуда едите?</Typography>
              <TextField fullWidth id="name" label="Город" />
            </div>
            <div className="mb-3">
              <Typography variant="subheading">Куда едите?</Typography>
              <TextField fullWidth id="name" label="Город" />
            </div>
            <div className="mb-3">
              <Typography variant="subheading">Откуда едите?</Typography>
              <TextField fullWidth id="name" label="Город" />
            </div>
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
