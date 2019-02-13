import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import GoogleMap from './GoogleMap';

class LunchDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ showModal: nextProps.showModal });
    }
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  getFormattedAddress = () => {
    let address = ``;
    if (this.props.restaurant && this.props.restaurant.location) {
      const addArray = this.props.restaurant.location.formattedAddress;
      addArray.forEach(add => {
        address += `${add} \n`;
      })
    }
    return address;
  }

  render() {
    const phone = this.props.restaurant ?
      this.props.restaurant.contact ? this.props.restaurant.contact.formattedPhone : null
      : null;
    const twitter = this.props.restaurant ?
    this.props.restaurant.contact ? this.props.restaurant.contact.twitter : null
    : null;
    return(
      <Modal
        show={this.state.showModal}
        onHide={this.handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="lunchTyme" closeButton>
          <h4>Lunch Tyme</h4>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <GoogleMap
            lat={this.props.restaurant.location.lat}
            lng={this.props.restaurant.location.lng}
            name={this.props.restaurant.name}
          />
          <div className="lunchDetail">
            <h4>{this.props.restaurant ? this.props.restaurant.name : null}</h4>
            <h6>{this.props.restaurant ? this.props.restaurant.category : null}</h6>
          </div>
          <p style={{ color: '#2A2A2A', whiteSpace: 'pre-wrap', marginLeft: '12px', marginTop: '16px', marginBottom: '26px' }}>
            {this.getFormattedAddress()}
          </p>
          <p style={{ color: '#2A2A2A', marginLeft: '12px', marginBottom: '12px' }}>{phone}</p>
          {twitter && <p style={{ color: '#2A2A2A', marginLeft: '12px' }}>@{twitter}</p>}
        </Modal.Body>
      </Modal>
    );
  }
}

export default LunchDetail;