import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDreams, postDream } from '../../redux/actions';

import DreamsForm from '../../components/dreams/form';
import DreamsList from '../../components/dreams/list';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDreams();
  }
  
  render(){
    const { dreams, postDream } = this.props;
    return (
      <div className="App">
        <header>
          <h1>
            A Dream of the Future
          </h1>
        </header>
        <main>
          <p class="bold">Oh hi,</p>
          <p>Tell me your hopes and dreams:</p>

          <DreamsForm postDream={postDream} />
          <section>
            <DreamsList dreams={dreams} />
          </section>
        </main>
        <footer>
          Made with <a href="https://glitch.com">Glitch</a>!
        </footer>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  dreams: state.dreamReducer.dreams,
});
const mapDispatchToProps = dispatch => ({
  getDreams: () => dispatch(getDreams()),
  postDream: (dream) => dispatch(postDream(dream)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
