import React,{Component} from 'react';
import {observer} from 'mobx-react';
import AppState from './stores/AppState';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './main.scss';
import Provider from './components/Provider';

const store = new AppState();

@observer
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>React+Mobx购物车示例</h1>
          <Header/>
          <Main />
          <Footer/>
        </div>
      </Provider>
       
    );
  }
}

export default App;
