import React from "react";
import {Card, Input} from "reactstrap";

const categories = [
    {
        icon: 'flaticon-internet',
        text: 'Онлайн услуги',
        value: 'online-service'
    },
    {
        icon: 'flaticon-cutlery',
        text: 'Еда',
        value: 'food'
    },
    {
        icon: 'flaticon-internet',
        text: 'Проезд',
        value: 'transport'
    },
    {
        icon: 'flaticon-home',
        text: 'Аренда дома',
        value: 'home'
    },
    {
        icon: 'flaticon-commerce',
        text: 'Покупки',
        value: 'shop'
    },
    {
        icon: 'flaticon-piggy-bank',
        text: 'Сбережения',
        value: 'savings'
    },
]

export default class CategoryInput extends React.Component {
    state = {
        text: ''
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        return <div>
            <div className='d-flex flex-wrap justify-content-around'>

                {categories.map((category, index) =>
                    <Card key={index}
                          className={(category.text === this.state.text ? 'bg-primary text-white' : '') + ' text-center mb-3'}
                          onClick={(e) => {
                              this.setState({text: category.text})
                          }}
                          style={{width: 100}}>
                        <i className={category.icon}/>
                        <div>{category.text}</div>
                    </Card>
                )}
            </div>

            <Input type='hidden' className='mt-3'
                   value={this.state.text}
                   onChange={this.handleChange.bind(this)}
                   name='category'
                   placeholder='Категория'/>
        </div>
    }
}
