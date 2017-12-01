import React, {Component} from 'react'
import MatchingTrips from '../components/MatchingTrips'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {getTrips} from "../actions/trips.action";
import Spinner from 'react-spinkit';
import Delay from 'react-delay'

@connect((store) => store.tripsReducer)
export default class MatchingTripsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getTrips())
    }

    render() {
        const {trips, total, loading} = this.props

        if (loading) {
            return <MatchingTrips total={total}>
                <Spinner name='double-bounce' />
            </MatchingTrips>
        }
        return <MatchingTrips total={total}>
            {trips.map((trip, key) => <Delay wait={250}><TripCard key={key} trip={trip}/></Delay>)}
        </MatchingTrips>
    }
}