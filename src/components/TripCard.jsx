import React from "react"
import {Card, Col, Row} from 'reactstrap'

export default ({trip}) => <div>
    <Card className='TripCard p-2 mb-3'>
        <h5 className='text-green'>$3434 to $4512</h5>
        <p>{trip.name}</p>
        <div className='dummy-block'/>
        <small className='pt-2'>
            <Row>
                <Col xs={7}>
                    {trip.highlightedLocations}
                </Col>
                <Col xs={5} className='text-right'>
                    {trip.isFlightIncluded ? <i className='fa fa-plane icon'/> : ''} {' '}
                    {trip.isLocalTravelIncluded ? <i className='fa fa-car icon'/> : ''}{' '}
                    80% match
                </Col>
            </Row>
        </small>
        <hr/>
        <div className='dummy-avatar'/>
    </Card>
</div>
