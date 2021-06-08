import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {



    render() {
        return (

            <div>
                <Modal show={this.props.show}  onHide={this.props.handlModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                   
                        <Card.Img variant="top" src={this.props.imageUrl} />
                       
                    <Modal.Body>
                    <p> {this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handlModal}>
                            close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default SelectedBeast;