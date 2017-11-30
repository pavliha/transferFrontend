import React, {Component} from 'react'
import MatchingTrips from '../components/MatchingTrips'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {getTrips} from "../actions/trips.action";

@connect((store) => ({
    trips: store.tripsReducer.trips,
    total: store.tripsReducer.total
}))
export default class MatchingTripsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getTrips())
    }

    render() {
        const {trips,total} = this.props
        return <MatchingTrips total={total}>
            {trips.map((trip, key) => <TripCard key={key} trip={trip}/>)}
        </MatchingTrips>
    }
}