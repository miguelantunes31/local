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

    this.state={lista:[
      
    ]};
  }

  i=0;
  meh=0;
  conta=0


  onChange = () => {
          this.setState({
            lista: this.state.lista.concat(
              <div>{this.i+1}<br/><Lista/></div>
            )
        })
        this.i++
      }


  ola=3;
  deleteItem = () => {
      var array = [...this.state.lista];
      array[this.ola-1]=" "
      this.setState({lista: array});

  }

  

  consola = () => {
    console.log (this.state.lista)
  }

  escolheLista = () => {
    this.ola = prompt('selecione a lista para eleminar') 
    this.deleteItem(this.ola)
  }

  elemina = () =>{

    if(this.state.lista.length===0){
      return (
        <Button disabled variant="contained" color="secondary" onClick={this.escolheLista}>
          Apagar Lista(com defeito) 
        </Button>
        )          
    } else {
      return (
        <Button variant="contained" color="secondary" onClick={this.escolheLista}>
          Apagar Lista(com defeito) 
        </Button>
      )
    }
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
                  {this.elemina()}
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


/*
var array = [...this.state.lista]; // make a separate copy of the array
      var index = array.indexOf(this.state.lista[ola-1])
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({lista: array});






        <Button variant="contained" color="secondary" onClick={this.escolheLista}>
                      Apagar Lista(com defeito) 
                  </Button>



                  this.setState({
      lista: this.state.lista.concat(
        <div><br/><Lista/></div>
      )
    })



    do{

            if(this.state.lista[this.i]===null){
              this.state.lista[this.i]=<div><br/><Lista/></div>
              this.meh=1
            }
            this.i++
        }while(this.meh!==1)
        }else{
*/