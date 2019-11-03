import React, { Component } from "react";
import { Segment, Icon, Container, Grid } from "semantic-ui-react";
import MenuLateral from "./MenuLateral";
import MenuTopo from "./MenuTopo";

export default class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Grid padded divided columns={2} style={{ height: "100vh" }}>
          <Grid.Row style={{ height: "100%" }} stretched>
            <Grid.Column width={3}>
              <MenuLateral />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Grid.Row color="red">
                <div className="branco" style={{ height: "10%" }}>
                  <MenuTopo />
                </div>
                <Segment style={{ height: "90%" }}></Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
