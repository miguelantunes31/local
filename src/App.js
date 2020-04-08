import React, {Component} from 'react';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import {Button} from '@material-ui/core'
import DashBoard from './components/bashBoard'
import Todos from './components/todos';
import Lista from './components/List';

const Box = styled('div')(compose(spacing , palette));

class App extends Component {
  render() {    
    return (
        <div className="App">
          <DashBoard/>
          <Lista />
        </div>
      );
  }
}


export default App;





