import React, { PureComponent } from 'react';

import './dashboardContainer.scss'
import Card from "../component/core/Card/Card";
import Button from "../component/core/Button/Button";
import CardHeader from "../component/core/Card/CardHeader";
import CardBlock from "../component/core/Card/CardBlock";
import CardFooter from "../component/core/Card/CardFooter";
import Avatar from "../component/core/Avatar/Avatar";
import Checkbox from "../component/core/Checkbox/Checkbox";
import TextInput from "../component/core/TextInput/TextInput";
import SwitchInput from "../component/core/SwitchInput/SwitchInput";
import {Link} from "react-router";



class DashboardContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeTab:'1'};
    this.toggleTabs = this.toggleTabs.bind(this);
  }
  
  //Methode For Tabs
  toggleTabs(tab){
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  
  render() {
    return (
      <div className="dashboard-wrapper">
      
        <div className="-content-wrap">
          <h3 className="content-name">Avatar</h3>
          <Avatar size="lg" initial="SA" />
          <Avatar size="xls" initial="SA" />
          <Avatar size="sm" initial="SA" />
          <Avatar size="xs" initial="SA" />

        </div>
    
        <div className="-content-wrap">
          <h3 className="content-name">Buttons</h3>
          <Button color='default'> Default Button</Button>
          <Button color='primary'> Primary Button</Button>
        </div>
        
        <div className="-content-wrap">
          <h3 className="content-name">Card</h3>
          <Card>
            <CardHeader value="Card Header Here" />
            <CardBlock>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis magni qui quibusdam vel! Adipisci alias aspernatur aut autem earum, eum, hic molestias officiis quae quod rem sed sequi, similique?
            </CardBlock>
            <CardFooter>
              Card Footer Here
            </CardFooter>
          </Card>
        </div>
  
        <div className="-content-wrap">
          <h3 className="content-name">Checkbox</h3>
          <Checkbox name="Checkbox" label="Checkbox"/>
          <Checkbox name="Checkbox 1" label="Checkbox default checked" checked/>
          <Checkbox name="Checkbox 2" label="Checkbox disabled" disabled/>
        </div>
  
        <div className="-content-wrap">
          <h3 className="content-name">TextInput</h3>
          <TextInput />
        </div>
  
        <div className="-content-wrap">
          <h3 className="content-name">Switch Input</h3>
          <SwitchInput inactiveValue="No" activeValue="Yes" />
        </div>
        
      </div>
    );
  }
}


export default DashboardContainer;
