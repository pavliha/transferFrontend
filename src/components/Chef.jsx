import React from "react";
import Link from "react-router-dom/es/Link";
import {Badge} from "reactstrap";

export default class Chef extends React.Component {
    state = {
        display: false
    }

    componentDidMount() {
        //нужно будет переделать для redux
        setTimeout(() => {
            this.setState({display: true})
            document.title = '(1) ' + document.title
        }, 3000)

    }

    render() {
        if (!this.state.display) return null
        return <Link to='/join/chat-with-peru' className='fixed-bottom-right animated bounceInUp'>
            <img src='/assets/chef.svg' width='100%'/>
            <Badge className='chef-badge' style={{position: 'absolute', right: 40, top: 30}} color="secondary">1</Badge>
            <audio autoPlay={true}>
                <source src="/assets/blip.mp3" type="audio/mpeg"/>
            </audio>
        </Link>
    }
}
      
