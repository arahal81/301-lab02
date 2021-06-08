/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
class Main extends React.Component {


     
    render() {
       
        

        return (

            <main>
                <section>
                <>
                        <Form.Group controlId="selectForm">
                        <Form.Control type="Text" onChange={this.props.titleSearch} placeholder="Enter your text that you search for it" />
                        </Form.Group>
                    </>
                <CardGroup >
                    {this.props.data.map(item => (
                        <HornedBeast
                            imageUrl={item.image_url}
                            title={item.title}
                            description={item.description}
                            handlModalchange={this.props.handlModalchange}
                        />
                    ))}
</CardGroup>
                </section>
            </main>
        )
    }
}
export default Main;