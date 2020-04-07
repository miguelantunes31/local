import React from 'react';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import {Button} from '@material-ui/core'
import DashBoard from './components/bashBoard'
import List from './components/List';

const Box = styled('div')(compose(spacing , palette));

export default function App () {
      

  return (
      <div>
        <DashBoard/>
        <List />
      </div>
    );

}





