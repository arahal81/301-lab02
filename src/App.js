import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imageUrl: '',
      title: '',
      description: '',
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
        <Main  handlModalchange={this.handlModalchange} titleSearch={this.titleSearch} />
        <Footer />
      </div>
    )
  }
}
export default App;
