import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {
    constructor (){
        super();
        this.state = {
            name: '',
            age: '',
            city: '',
        };
    }
    onChange = (e) => {
    const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        };

    onSubmit = (e) => {
        e.preventDefault();

        const {name, age, city} = this.state;
        axios.post('api/user', {name, age, city})
        .then((result) => {
        this.props.history.push('/');
        });
    }
    
    render(){
        const {name, age, city} = this.state;
        return(
            <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD User
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name : </label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="NAME" />
              </div>
              <div class="form-group">
                <label for="title">Age : </label>
                <input type="text" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="Age" />
              </div>
              <div class="form-group">
                <label for="author">City : </label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
        );
    }
}

export default Create;