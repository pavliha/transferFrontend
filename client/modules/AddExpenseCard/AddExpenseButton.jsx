import React from "react";
import {Button} from "reactstrap";

export default ({className, onClick}) => <Button color='primary'
                                                 className='btn-round mb-3 p-4 shadow-3'
                                                 onClick={onClick}>
    <i className="fa fa-google-wallet" aria-hidden="true"/>
</Button>
      
