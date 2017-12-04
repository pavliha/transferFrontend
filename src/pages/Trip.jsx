import React, {Component} from 'react'
import Layout from "../components/Layout";

export default class Trip extends Component {
    render() {
        return <Layout>
            <div style={{height: '70vh'}} className='d-flex justify-content-center align-items-center'>
                <div>
                    <div className='dummy-image text-center'>dummy page</div>
                    <br/>
                    <button className='btn btn-primary' onClick={this.props.history.goBack}>
                        Go Back
                    </button>
                </div>
            </div>
        </Layout>
    }
}