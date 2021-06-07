/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import jsonData from './data.json';
class Main extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
          data : jsonData
        }
      }
     
    render() {
       
        

        return (

            <main>
                <section>
                <CardGroup >
                    {this.state.data.map(item => (
                        <HornedBeast
                            imageUrl={item.image_url}
                            title={item.title}
                            description={item.description}

                        />
                    ))}
</CardGroup>
                </section>
            </main>
        )
    }
}
export default Main;