import React, { Component} from 'react';
import './index.css';

class DreamsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dream: '',
    };
  }
  
  handleSubmit(event){
    event.preventDefault();
    const { dream } = this.state;
    this.props.postDream(dream);
    this.setState({
      dream: '',
    });
  }
  
  onChangeDream(dream){
    this.setState({
      dream,
    });
  };
  
  render(){
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          name="dream"
          type="text"
          maxlength="100"
          placeholder="Dreams!"
          aria-labelledby="submit-dream"
          value={this.state.dream} onChange={(event) => this.onChangeDream(event.target.value)}
          />
        <button type="submit">Submit Dream</button>
      </form>
    );
  }
}

export default DreamsForm;
