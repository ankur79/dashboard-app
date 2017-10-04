import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalHolder extends Component { 
    render(){
        console.log("test")
        const { showModal } = this.props;
        return (
            <Modal show={showModal} >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             </Modal.Body>
            <Modal.Footer>
              <Button >Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}

export default ModalHolder;
