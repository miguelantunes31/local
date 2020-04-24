import React, {Component} from 'react';
import Lista from './components/List';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'

import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';

const BBox = styled('div')(compose(spacing,palette));

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));
  
    

class App extends Component {   


  constructor(props) {
    super(props);

    this.state={lista:[
      null,
      null,
      null,
      null,
      null
    ]};
  }
  
  i=0;
  meh=0;
  conta=0


  onChange = () => {

    if(this.state.lista[0]==null){
      this.state.lista[0]=<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 1</h2></Box><Lista/><br/></div>
      this.setState(this.state.lista)

    }else if (this.state.lista[1]==null){
      this.state.lista[1]=<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 2</h2></Box><Lista/><br/></div>
      this.setState(this.state.lista)

    }else if(this.state.lista[2]==null){
      this.state.lista[2]=<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 3</h2></Box><Lista/><br/></div>
      this.setState(this.state.lista)

    }else if(this.state.lista[3]==null){
      this.state.lista[3]=<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 4</h2></Box><Lista/><br/></div>
      this.setState(this.state.lista)

    }else if(this.state.lista[4]==null){
      this.state.lista[4]=<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 5</h2></Box><Lista/><br/></div>
      this.setState(this.state.lista)
    }else{
      return alert("sem espeço para novas listas")
    }
          

      }


  ola=3;
  deleteItem = () => {
      var array = [...this.state.lista];
      array[this.ola-1]=null
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
          Apagar Lista
        </Button>
        )          
    } else {
      return (
        <Button variant="contained" color="secondary" onClick={this.escolheLista}>
          Apagar Lista
        </Button>
      )
    }
  }




  render() {

    return (
        <div className="App">
           <BBox
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
          </BBox>
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