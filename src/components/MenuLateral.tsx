import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          inicio
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} />

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Cadastro
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Parceiro de negocios</p>
          <p>Empresa</p>
          <p>Grupo de Parceiro</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Estoque
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Material</p>
          <p>Entrada de Material</p>
          <p>Movimento de Material</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
