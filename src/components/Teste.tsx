import React, { Component } from "react";
import { Grid, Menu, Segment, Accordion } from "semantic-ui-react";
import MenuTopo from "./MenuTopo";
import AccordionTeste from "./AcordionTeste";

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: "bio", activeIndex: 0 };

  handleItemClick = (e: any, { name }: any) =>
    this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        
      </div>
    );
  }
}
