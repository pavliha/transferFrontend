import React, {Component} from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {getTrips} from "../actions/trips.action";
import Spinner from 'react-spinkit';
import {Col, Container} from "reactstrap";
import InfiniteScroll from "react-infinite-scroller"
import animateScrollTo from 'animated-scroll-to';
import Chef from "../components/Chef";
import {CARD_LOAD_LIMIT} from "../actions/constants";

@connect((store) => store.tripsReducer)
export default class MatchingTripsContainer extends Component {

    componentWillMount() {
        const {limit, skip, dispatch} = this.props
        dispatch(getTrips({limit, skip}))
    }

    componentDidUpdate() {
        const {limit, skip} = this.props
        this.handleAutoScroll(limit)
        this.animateCardsInSequence(limit, skip)
    }

    animateCardsInSequence(limit, skip) {
        const cards = document.querySelectorAll('.js-TripCard')
        const nodesArray = [].slice.call(cards);
        const latest = nodesArray.slice(skip, limit)
        if (!latest.length)
            nodesArray.forEach((card) => {
                $(card).removeClass('hidden')
            })
        else {
            let i = 0;
            const intervalId = setInterval(() => {
                $(cards[i]).removeClass('hidden').addClass('animated animated-fast ZoomIn')
                i++
            }, 200);
        }
    }


    handleAutoScroll(limit) {
        const cardPosition = limit - CARD_LOAD_LIMIT;
        if (cardPosition === 0) return //if this card from the fist load - do nothing
        const card = document.querySelector('.js-TripCard-' + cardPosition)
        //check to prevent from scrolling to non-existent card
        if (card) animateScrollTo(card, {speed: 1000,})
    }

    handleLoadMore(e) {
        const {limit, skip, dispatch} = this.props
        dispatch(getTrips({skip: skip + CARD_LOAD_LIMIT, limit: limit + CARD_LOAD_LIMIT}))
    }

    render() {
        const {trips, total, skip, limit} = this.props

        const hasMore = (skip <= total)

        return <Layout>
            <Container className='mt-4'>
                <h4 className='text-muted'>Matching trips</h4>
                <p className='pt-3 pb-2'>{total ? total + ' results' : ''}</p>

                <InfiniteScroll
                    pageStart={0}
                    initialLoad={false}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={hasMore}
                    className='row justify-content-start'
                    loader={
                        <Col xs={12} className="d-flex justify-content-center align-items-center">
                            <Spinner name='double-bounce'/>
                        </Col>
                    }>

                    {trips.map((trip, key) => {
                            return <Col className='pb-3' key={key} lg={4} md={6} xs={12} sm={12}>
                                <TripCard trip={trip} index={key} className={`hidden js-TripCard js-TripCard-${key}`}/>
                            </Col>
                        }
                    )}
                    {!hasMore ?
                        <Col xs={12} className={'p-2 pb-4 text-center'}>“That’s all for now. Cooking more trips. Coming
                            soon.” I do not have any designs for this. Feel free to be creative!</Col> : ''}
                </InfiniteScroll>
                {limit >= 18 ? <Chef/> : null}
            </Container>

        </Layout>
    }
}
