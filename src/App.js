import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import jsonData from '../src/component/data.json';
import SelectedBeast from './component/SelectedBeast'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imageUrl: '',
      title: '',
      description: '',
      data: jsonData
    };

  }
  handlModal = () => {
    this.setState({ show: !this.state.show });
  }

  handlModalchange = (e) => {
    this.setState({
      show: !this.state.show,
      imageUrl: e.target.src,
      title: e.target.alt,
      description: e.target.name
    });
  }



  titleSearch = (e) => {
    this.setState({
      // eslint-disable-next-line array-callback-return
      data: jsonData.filter(item => {
        if (item.title.toUpperCase().includes(e.target.value.toUpperCase())) {
          return true;
        }

      })
    });

  }
  render() {
    return (
      <div>
        <SelectedBeast
          imageUrl={this.state.imageUrl}
          title={this.state.title}
          description={this.state.description}
          show={this.state.show}
          handlModal={this.handlModal}
        />
        <Header />
        <Main data={this.state.data} handlModalchange={this.handlModalchange} titleSearch={this.titleSearch} />
        <Footer />
      </div>
    )
  }
}
export default App;
