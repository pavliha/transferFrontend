import React from 'react'
import Layout from '../modules/Layout/Layout'
import {connect} from 'react-redux'
import {Container} from "reactstrap";
import TripList from "../modules/Trips/TripListContainer";
import Chef from "../modules/Chef/ChefContainer";

const Holidays = () =>
    <Layout>
        <Container className='mt-4'>
            <TripList/>
            <Chef/>
        </Container>
    </Layout>

connect((store) => store.tripsReducer)(Holidays)

export default Holidays