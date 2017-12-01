import React, {Component} from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {getTrips} from "../actions/trips.action";
import Spinner from 'react-spinkit';
import {Col, Row} from "reactstrap";

@connect((store) => store.tripsReducer)
export default class MatchingTripsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getTrips())
    }

    render() {
        const {trips, total, loading} = this.props


        if (loading)
            return <Layout>
                <div className='d-flex justify-content-center align-items-center' style={{height: "80vh"}}>
                    <Spinner name='double-bounce'/>
                </div>
            </Layout>


        return <Layout>
            <section className='container mt-4 '>
                <h4 className='text-muted'>Matching trips</h4>
                <p className='pt-3 pb-2'>{total ? total + ' results' : ''}</p>
                <Row className='justify-content-start animated ZoomIn'>
                    {trips.map((trip, key) =>
                        <Col key={key} lg={4} md={6} xs={12} sm={12}>
                            <TripCard style={{}} trip={trip}/>
                        </Col>
                    )}
                </Row>
            </section>
        </Layout>
    }
}