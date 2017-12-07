import React from 'react'
import Layout from '../modules/Layout/Layout'
import {connect} from 'react-redux'
import {Container} from "reactstrap";
import Chef from "../modules/Chef/ChefContainer";
import TripList, {CARD_LOAD_LIMIT} from "../modules/Trips/TripListContainer";

const Trips = ({limit}) =>
    <Layout>
        <Container className='mt-4'>
            <TripList/>
        </Container>
        {limit >= CARD_LOAD_LIMIT ? <Chef/> : null}
    </Layout>

connect((store) => store.tripsReducer)(Trips)

export default Trips