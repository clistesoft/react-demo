import React, { PureComponent } from 'react';

import './dashboardContainer.scss'
import Card from "../component/core/Card/Card";
import CardBlock from "../component/core/Card/CardBlock";
import CardHeader from "../component/core/Card/CardHeader";
import CardFooter from "../component/core/Card/CardFooter";


class MartsContainer extends PureComponent {
  render() {
    return (

        <Card>
          <CardHeader value="Add User">
            Header
          </CardHeader>
          <CardBlock>
            Content
          </CardBlock>
          <CardFooter>
          </CardFooter>
        </Card>
    );
  }
}

export default MartsContainer;
