import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
    state = {
        title: 'Cool Shoes',
        description: 'I have those Context',
        image: 'dog.jpg',
        largeImage: 'large-dog.jpg',
        price: 0,
    }
    handleChange = e => {
        const { name, type, value } => e.target;
        const val = type === 'number' ? parseFloat(value) :
        value;
        this.setState( [name]: val);
    };
    
    render() {
        return (
            <Form>
            <fieldset>
            <label htmlFor="title">
            Title
            <>
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required value={this.state.title}
            on Change={this.handleChange}
            />
            </label>
            
            </fieldset>
            </Form>

        )
        
    }

}
export default CreateItem;