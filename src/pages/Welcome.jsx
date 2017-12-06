import React, {Component} from 'react';
import {connect} from 'react-redux'
import Link from "react-router-dom/es/Link";

@connect((state) => {
    return {
        firstName: state.membersReducer.signUpData.firstName,
    };
})
export default class WelcomePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render() {
        const name = this.state.firstName
        return <main className="bg-white bg-planes" style={{height: '100vh'}}>
            <section className='mt-5 d-flex justify-content-center align-items-center text-center'>
                <div>
                    <h2 className='p-4'>Welcome{name ? ", " + name + '.' : ''}</h2>
                    <div className='lead' style={{width: 450}}>
                        My chefs are looking at your family profile and will suggest trips soon.
                        Meanwhile...
                    </div>
                    <div className='mt-5'>
                        <img src='/assets/girl.svg'/>
                    </div>
                    <div className='pt-5'>
                        <Link className='btn btn-primary btn-block' to='/me/matching-trips'>Next: Browse matching trips</Link>
                    </div>
                </div>
            </section>
        </main>
    }
}