import React, {Component} from 'react';
import './post-add.css';


export default class PostAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
          text: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text)
    }
    render () {
      return (
        <form className="form" onSubmit={this.onSubmit}>
          <input  
          onChange={this.onValueChange}/>
          <button className="btn"><p>Написать консультанту</p></button>
        </form>
        )
    }
}
