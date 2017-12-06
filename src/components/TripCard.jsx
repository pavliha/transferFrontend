import React from "react"
import {Card, CardSubtitle, CardTitle, Col, Row} from 'reactstrap'
import Link from "react-router-dom/es/Link";

export default ({user, trip, className}) =>
    <Card className={className}>
        <section className='px-3 pt-3'>
            <CardTitle className="h5">
                <Link className='trip-card-title' to={'/me/matching-trips/' + trip.urlSlug}>$3434 to $4512</Link>
            </CardTitle>
            <CardSubtitle className="h6  mb-2">
                <Link className='trip-card-subtitle' to={'/me/matching-trips/' + trip.urlSlug}>{trip.name}</Link>
            </CardSubtitle>
            <Link to={'/me/matching-trips/' + trip.urlSlug}>
                <div className='dummy-block'>
                    <img src='' width='100%'/>
                </div>
            </Link>
            <div className='pt-3 px-1'>
                <small>
                    <Row>
                        <Col xs={7}>
                            {trip.highlightedLocations}
                        </Col>
                        <Col xs={5} className='text-right'>
                            {trip.isFlightIncluded ? <i className='fa fa-plane icon'/> : ''} {' '}
                            {trip.isLocalTravelIncluded ? <i className='fa fa-car icon'/> : ''}{' '}
                            {user ? '80% match' : null}
                        </Col>
                    </Row>
                </small>
            </div>
        </section>
        <hr/>
        <section className='d-flex px-3 pb-3'>
            <div>
                <div className='dummy-avatar mt-1 mr-2'>
                    <img
                        src={`https://s3-eu-west-1.amazonaws.com/vacations-cafe-thumb/designers/${trip.designer.user._id}/profile.jpg`}
                        width='100%'/>
                </div>
            </div>
            <div>
                <div>
                    <small>
                        By {trip.designer.user.firstName} {trip.designer.user.lastName}@{trip.designer.agencyName}
                    </small>
                </div>
                <div>
                    <small>Top 2% · Independent designer · Blogger</small>
                </div>
            </div>
        </section>
    </Card>
