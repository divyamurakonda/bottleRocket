import React, { Component } from 'react';
import Home from './Home';
import LunchItem from './LunchItem';
import LunchDetail from './LunchDetail';

class Lunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      showModal: false,
      selectedLunchItem: {},
    };
  }

  loadRestaurants() {
    const url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
    let headers = {
    'Access-Control-Allow-Origin':'http://localhost:3000',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
  };
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: headers
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({ restaurants: json.restaurants });
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentWillMount() {
    this.loadRestaurants();
  } 

  handleLunchItemOnClick = (e) => {
    console.log(e.target.id);
    const targetId = e.target.id;
    const selectedLunchItem = this.state.restaurants[targetId];
    this.setState({ showModal: true, selectedLunchItem });
  }

  render() {
    console.log('state', this.state.restaurants)
    const lunchItems = this.state.restaurants &&
      this.state.restaurants.map((restaurant, index) => {
        const key = `LunchItem${index}`;
        if (index%2 === 0 && index+1 <= this.state.restaurants.length )
        return <LunchItem
          key={key}
          nextRestaurant={this.state.restaurants[index+1]}
          restaurant={restaurant}
          index={index}
          handleLunchItemOnClick={this.handleLunchItemOnClick}
          length={this.state.restaurants.length}
        />
        return <div key={key} />
      });
    return (
      <Home>
        <div className="lunchTyme"><h4>Lunch Tyme</h4></div>
        {lunchItems}
        {this.state.showModal && <LunchDetail
          showModal={this.state.showModal}
          restaurant={this.state.selectedLunchItem}
        />}
      </Home>
    );
  }
}

export default Lunch;