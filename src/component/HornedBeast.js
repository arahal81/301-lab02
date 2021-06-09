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
                    <Card.Img onClick={this.props.handlModalchange} variant="top" src={this.props.imageUrl } alt={this.props.title} name={this.props.description} style={{ width: '30rem' ,height:'25rem'}} />
                    <Card.Body>
                        <Card.Title onClick={this.inecrement} > <h1>💓{this.state.count}</h1></Card.Title>
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