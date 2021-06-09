/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import jsonData from './data.json';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      
          data: jsonData
        };
      }
    filterByHornsNum = (event) => {
        this.setState({ data: jsonData.filter(item => {
            if (item.horns == event.target.value) {
                return (item);
            }
            else if (parseInt(event.target.value) === 0) {
                return (item);
            }
        }) });
     
    }
     
    render() {
       
        

        return (

            <main>
                <section>
                    <>
                        <Form.Group controlId="selectForm">
                            <Form.Label>How many Horns?</Form.Label>
                            <Form.Control onChange={this.filterByHornsNum} name="filterByHornsNum" as="select">
                                <option value='0'>All</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                                <option value='3'>Three</option>
                                <option value='100'>Wow</option>
                            </Form.Control>
                        </Form.Group>
                    </>
                <CardGroup >
                    {this.state.data.map(item => (
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