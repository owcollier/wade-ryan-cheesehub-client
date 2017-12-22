import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese.js'

export class CheeseList extends React.Component {

  componentWillMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    const cheeses = this.props.cheeses.map((cheese, index) => (
      <li key={index}>
        {cheese}
      </li>
    ));

    return (
      <ul id="cheeseList" className="cheese-list">
        {cheeses}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);