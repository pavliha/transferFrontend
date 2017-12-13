import React from 'react'
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

export default ({visible, onSubmit,onCancel}) => {

    if (!visible) return null

    return <form className='card fixed-bottom card-expense p-3 animated slideInUp'>
        <Input type='text' defaultValue="" name='name' placeholder='Описание'/>
        <InputGroup className='mt-3'>
            <Input type='number' placeholder='Сумма' name='amount' defaultValue=""/>
            <InputGroupAddon>грн.</InputGroupAddon>
        </InputGroup>


        <Button color='primary' className='mt-3' onClick={onSubmit}>Добавить</Button>
        <Button color='danger' className='mt-3' onClick={onCancel}>
            <i className="fa fa-close" aria-hidden="true"/>
        </Button>
    </form>


}