import React, {Component} from 'react';
import Lista from './components/List';
import { useState, useEffect } from 'react';

import Example from './components/exemplo';

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
  
    




function App () {   

  let lista: any[]= [
    null,
    null,
    null,
    null,
    null
  ];

  const [portfolioData, setPortfoloioData] = useState<any[]>([ // <div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 1</h2></Box><Lista/><br/></div>
    null,
    null,
    null,
    null,
    null]);
  

    
  
  
  let i:number=0;
  
  function adiciona () {

    if(portfolioData[0]==null){
      lista[0] = <div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 1</h2></Box><Lista/><br/></div>
      setPortfoloioData([lista[0]])
      return lista

    }else if (lista[1]==null){
      lista[1] = <div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 2</h2></Box><Lista/><br/></div>
      setPortfoloioData([lista[0],lista[1]])
      return lista

    }else if(lista[2]==null){
      lista[2] = <div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 3</h2></Box><Lista/><br/></div>
      setPortfoloioData([lista[0],lista[1],lista[2]])
      return lista

    }else{
      return alert("sem espeço para novas listas")
    }
          
    
      }


  let ola: number=3;
  function deleteItem() {
      var array = [...lista];
      array[ola-1]=null
      lista= array

  }

  /*function escolheLista  ()  {
    let ola :number | string = prompt('selecione a lista para eleminar') 
    deleteItem(ola)
  }*/

  /*function elemina() {

    if(lista.length===0){
      return (
        <Button disabled variant="contained" color="secondary" onClick={escolheLista}>
          Apagar Lista
        </Button>
        )          
    } else {
      return (
        <Button variant="contained" color="secondary" onClick={escolheLista}>
          Apagar Lista
        </Button>
      )
    }
  } {elemina()}*/




    return <>
        <div className="App">
           <BBox
            color="Blue" bgcolor="lightBlue" p={1}
          >
            <table>
                <td>
                  <form >
                      <Button variant="outlined" color="secondary" onClick={adiciona} >
                          Nova Lista
                      </Button>
                  </form>
                </td>
                <td>
                  
                </td>
            </table>
          </BBox>
          <br/>
            <div>{portfolioData}</div>
          <br/>
          <Example/>
        </div>
      </>
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