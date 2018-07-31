import React from 'react';
import { render } from 'react-dom';

import Hello from 'simple-react-es6/core/Hello';
import Hello2 from 'simple-react-es6/core/Hello2';
// import {Hello, Hello2} from 'simple-react-es6/core';

import World from './components/world.jsx';
import Button from '@material-ui/core/Button';

render(
  <div>
    <Hello />
    <Hello2 />
    <World />
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  </div>,
  document.getElementById('app')
);