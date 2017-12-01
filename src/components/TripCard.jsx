import React from "react"
import {Card, CardSubtitle, CardTitle, Col, Row} from 'reactstrap'

export default ({trip, style}) => <div>
    <Card className='mb-3' style={style}>
        <div className='px-3 pt-3'>
            <CardTitle className="h5 trip-card-title">$3434 to $4512</CardTitle>
            <CardSubtitle className="h6 trip-card-subtitle mb-2">{trip.name}</CardSubtitle>
            <div className='dummy-block'>
                <img src='' width='100%'/>

            </div>
            <div className='pt-3 px-1'>
                <small>
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
            </div>
        </div>
        <hr/>
        <div className='d-flex px-3 pb-3'>
            <div>
                <div className='dummy-avatar mt-1 mr-2'>
                    <img src={`https://s3-eu-west-1.amazonaws.com/vacations-cafe-thumb/designers/${trip.designer.user._id}/profile.jpg`}
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
        </div>
    </Card>
</div>
