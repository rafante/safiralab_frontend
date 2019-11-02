import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Container, Grid } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <Container>
      <Grid className="p-bot" columns={2}>
        <Grid.Row  stretched>
          <Grid.Column width={1} color="brown"></Grid.Column>
          <Grid.Column stretched color="blue"></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
