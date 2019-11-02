import React from 'react';
import './App.css';
import { Segment, Icon, Container, Grid } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <Container fluid>
      <Grid columns={2}>
        <Grid.Row stretched>

        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={13}>
            <Segment content >
              <Container fluid></Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
