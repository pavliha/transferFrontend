import React from "react";
import {Card, Input} from "reactstrap";
import {connect} from "react-redux";

@connect(store => store.expensesReducer)
export default class CategoryInput extends React.Component {
    state = {
        text: 'Описание',
        category: this.props.categories[0],
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        const {categories} = this.props

        return <div>
            <div className='d-flex flex-wrap justify-content-around' style={{maxHeight: 300, overflow: "scroll"}}>

                {categories.map((category, index) =>
                    <Card key={index}
                          className={(category.text === this.state.text ? 'bg-primary text-white' : '') + ' text-center mb-3'}
                          onClick={(e) => {
                              this.setState({
                                  text: category.text,
                                  category: category
                              })
                          }}
                          style={{width: 100}}>
                        <i className={category.icon}/>
                        <div>{category.text}</div>
                    </Card>
                )}
            </div>

            <Input type='hidden' className='mt-3'
                   value={JSON.stringify(this.state.category)}
                   onChange={this.handleChange.bind(this)}
                   name='category'/>

            <Input type='text' placeholder={this.state.text} className='mt-3' name='name'/>

        </div>
    }
}
