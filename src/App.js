import React, {Component} from 'react';
import Lista from './components/List';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'

const Box = styled('div')(compose(spacing,palette));

class App extends Component {   

  state = {
    lista: [

    ]
  }

  onChange = () => {
  this.setState({
      lista: this.state.lista.concat(<Lista/>,<br/>)
    })
  }


  render() {

    return (
        <div className="App">
           <Box
            color="Blue" bgcolor="lightBlue" p={1}
        >
            <table>       
                <td>
                  <form onSubmit={this.handleSubmit}>
                      <Button variant="outlined" color="secondary" onClick={this.onChange} >
                            Nova Lista
                        </Button>
                  </form>
                </td>
                <td>
                    <Button variant="contained" color="secondary">
                        Apagar Lista
                    </Button>
                </td>
            </table>
        </Box>
          <br/>
          {this.state.lista}
          <br/>
        </div>
      );
  }
}

export default App;





