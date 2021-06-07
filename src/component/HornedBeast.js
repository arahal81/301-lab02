import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    inecrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (

            <div>
                < Card className="cardimg" style={{color:'whitesmoke', backgroundColor:'black',width: '30.4rem' ,height:'40rem',borderColor:'black ',padding:'0.2rem'}}>
                    <Card.Img style={{ width: '30rem' ,height:'25rem'}} onClick={this.inecrement} variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title > <p>💓{this.state.count}</p></Card.Title>
                        <Card.Text>
                            <h2>{this.props.title}</h2>
                            <p> {this.props.description}</p>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
               
            </div>

        )
    }
}
export default HornedBeast;