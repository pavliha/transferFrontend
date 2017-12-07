import React from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import {Container} from "reactstrap";
import TripList from "../containers/TripList";
import Chef from "../containers/Chef";

const Holidays = () =>
    <Layout>
        <Container className='mt-4'>
            <TripList/>
            <Chef/>
        </Container>
    </Layout>

connect((store) => store.tripsReducer)(Holidays)

export default Holidays