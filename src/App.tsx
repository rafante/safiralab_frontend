import React from "react";
import "./App.css";
import { Segment, Icon, Container, Grid } from "semantic-ui-react";
import MenuLateral from "./components/MenuLateral";

const App: React.FC = () => {
  return (
    <Container fluid>
      <Grid padded divided columns={2} style={{ height: "100vh" }}>
        <Grid.Row style={{ height: "100%" }} stretched>
          <Grid.Column color="blue" width={3}>
            <MenuLateral />
          </Grid.Column>
          <Grid.Column color="blue" width={13}>
            <Grid.Row color="green" as={Segment}></Grid.Row>
            <Grid.Row color="red" as={Segment}></Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
