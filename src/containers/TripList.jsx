import React, {Component} from 'react'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {animateCards, getTrips} from "../actions/trips.action";
import Spinner from 'react-spinkit';
import Mansory from "react-masonry-infinite"
import animateScrollTo from 'animated-scroll-to';
import {CARD_LOAD_LIMIT} from "../actions/constants";

@connect((store) => store.tripsReducer)
export default class MatchingTripsContainer extends Component {

    componentDidUpdate() {
        const {skip, animated, dispatch} = this.props

        this.animateCardsInSequence(skip)
        dispatch(animateCards())

    }

    animateCardsInSequence(skip) {
        const cards = document.querySelectorAll('.js-TripCard')
        const nodesArray = [].slice.call(cards);
        //const latest = nodesArray.slice(skip, skip+CARD_LOAD_LIMIT)

        let i = 0;

        let latest = nodesArray.slice(skip,skip+CARD_LOAD_LIMIT)

        latest.forEach(card=>{
            $(card).addClass('hidden')
        })
        const intervalId = setInterval(() => {
            $(nodesArray[i]).removeClass('hidden').addClass('animated animated-fast ZoomIn')
            i++
        }, 50);

    }


    handleAutoScroll(limit) {
        const cardPosition = CARD_LOAD_LIMIT;
        if (cardPosition === 0) return //if this card from the fist load - do nothing
        const card = document.querySelector('.js-TripCard-' + cardPosition)
        //check to prevent from scrolling to non-existent card
        if (card) animateScrollTo(card, {speed: 1000,})
    }

    handleLoadMore(page) {
        const {skip, dispatch, total} = this.props
        if (total >= skip)
            dispatch(getTrips({skip: CARD_LOAD_LIMIT * page}))
    }

    render() {
        const {trips, total, skip, animated} = this.props

        const hasMore = (skip <= total)

        return <div>
            <h4 className='text-muted'>Matching trips</h4>
            <p className='pt-3 pb-2'>{total ? total + ' results' : ''}</p>
            <Mansory
                style={{margin: '0 auto'}}
                pageStart={-1}
                initialLoad={false}
                loadMore={this.handleLoadMore.bind(this)}
                hasMore={hasMore}>
                {trips.map((trip, key) =>
                    <TripCard trip={trip} key={key} index={key}
                              className={`js-TripCard js-TripCard-${key} mb-3`}/>
                )}
            </Mansory>
            <section className=' d-flex justify-content-center p-2 py-4 text-center'>
                {hasMore ? <Spinner name='double-bounce'/> :
                    <div>That’s all for now. Cooking more trips. Coming soon.</div>}
            </section>
        </div>
    }
}
