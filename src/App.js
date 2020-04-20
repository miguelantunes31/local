import React, {Component} from 'react';
import Lista from './components/List';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import { render } from '@testing-library/react';

const Box = styled('div')(compose(spacing,palette));


  
    

class App extends Component {   
  constructor(props) {
    super(props);

    this.state={lista:[]};
  }
  i=0;

  onChange = () => {
    this.setState({
      lista: this.state.lista.concat(
        <div><br/><Lista/></div>
      )
    })
    console.log (this.state.lista)
    this.i++
  }
  ola=3
  deleteItem = () => {
      var array = [...this.state.lista]; // make a separate copy of the array
      var index = array.indexOf(this.state.lista[this.ola-1])
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({lista: array});
  }

  }

  consola = () => {
    console.log (this.state.lista)
  }

  escolheLista = () => {
    this.ola = prompt('Please Enter your Name') 
    this.deleteItem(this.ola)
  }





  render() {

    return (
        <div className="App">
           <Box
            color="Blue" bgcolor="lightBlue" p={1}
          >
            <table>       
                <td>
                  <form >
                      <Button variant="outlined" color="secondary" onClick={this.onChange} >
                          Nova Lista
                      </Button>
                  </form>
                </td>
                <td>
                  <Button variant="contained" color="secondary" onClick={this.escolheLista}>
                      Apagar Lista(com defeito) 
                  </Button>
                </td>
            </table>
          </Box>
          <br/>
            <div>{this.state.lista}</div>
          <br/>
        </div>
      );
  }
}

export default App;