import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LunchItem extends Component {

  render() {
    return (
      <Row>
        <Col key={this.props.index} sm={12} md={6} lg={6}>
          <div
            id={this.props.index}
            key={this.props.index}
            className="lunchItem"
            style={{
              backgroundImage: `url(${this.props.restaurant.backgroundImageURL})`,
            }}
            onClick={this.props.handleLunchItemOnClick}
          >
            <header>
              <h5 id={this.props.index}>{this.props.restaurant.name}</h5>
              <p id={this.props.index}>{this.props.restaurant.category}</p>
            </header>
          </div>  
        </Col>
        {this.props.index+1 < this.props.length && <Col key={this.props.index+1} md={6} lg={6}>
          <div
            id={this.props.index+1}
            key={this.props.index+1}
            className="lunchItem"
            style={{
              backgroundImage: `url(${this.props.nextRestaurant.backgroundImageURL})`,
            }}
            onClick={this.props.handleLunchItemOnClick}
          >
            <header>
              <h5 id={this.props.index}>{this.props.nextRestaurant.name}</h5>
              <p id={this.props.index}>{this.props.nextRestaurant.category}</p>
            </header>
          </div>
        </Col>}
      </Row>
    );
  }
}

export default LunchItem;