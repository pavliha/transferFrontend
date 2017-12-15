import React from "react";
import {Card, Input} from "reactstrap";
import {connect} from "react-redux";

@connect(store => store.expensesReducer)
export default class CategoryInput extends React.Component {
    state = {
        value: '',
        text: 'Описание',
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const {categories} = this.props
        if (categories.length) return null

        return <div>
            <div className='d-flex flex-wrap justify-content-around'>

                {categories.map((category, index) =>
                    <Card key={index}
                          className={(category.value === this.state.value ? 'bg-primary text-white' : '') + ' text-center mb-3'}
                          onClick={(e) => {
                              this.setState({
                                  value: category.value,
                                  text: category.text
                              })
                          }}
                          style={{width: 100}}>
                        <i className={category.icon}/>
                        <div>{category.text}</div>
                    </Card>
                )}
            </div>

            <Input type='hidden' className='mt-3'
                   value={this.state.value}
                   onChange={this.handleChange.bind(this)}
                   name='category'/>

            <Input type='text' placeholder={this.state.text} className='mt-3' name='name'/>

        </div>
    }
}
