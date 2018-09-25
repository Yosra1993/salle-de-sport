import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import ProfilSalleDeSport from './profilSalleDEsport.js'
import PromotionEvent from './Profil-Promotion-EventList.js'
import Profilcoach from './profil-coachs.js'
import Navbar from './navbar.js'

class PageSalleDeSport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfilGym: true,
      showPromotionEvent: false,
      showProfilcoach: false,
    };
    this.toggleShowProfile = this.toggleShowProfile.bind(this);
    this.toggleShowPromotionEvent = this.toggleShowPromotionEvent.bind(this);
    this.toggleShowCoachValue = this.toggleShowCoachValue.bind(this);

  }

  toggleShowProfile() {
    this.setState({
      showProfilGym: true,
      showPromotionEvent: false,
      showProfilcoach: false,
    });
  }

  toggleShowPromotionEvent() {
    this.setState({
      showProfilGym: false,
      showPromotionEvent: true,
      showProfilcoach: false,
    });
  }

  toggleShowCoachValue() {
    this.setState({
      showProfilcoach: true,
      showProfilGym: false,
      showPromotionEvent: false,
    
    });
  }
  state = { visible: false,}
  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })


  render() {
    const { visible } = this.state

    return (
      <div>
        <Navbar/>
        <div className='profile-salle-de-sport'style={{paddingTop: "70px"}}>
        <Button onClick={this.handleButtonClick}><Icon disabled name='bars'/></Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={this.toggleShowProfile}>
              <Icon name='home' />
              Profil
            </Menu.Item>
            <Menu.Item as='a' onClick={this.toggleShowPromotionEvent}>
              <Icon name='camera' />
              Promotion/Event
            </Menu.Item>
            <Menu.Item as='a' onClick={this.toggleShowCoachValue}>
              <Icon name='camera' />
              les coachs
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher style={{backgroundImage:"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/itCjTBE/grey-light-smooth-moving-waves-background-video-animation-hd-1920x1080_vjkea4zve__F0000.png')"
                ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                
          <Segment basic>
          {this.state.showProfilGym ?<ProfilSalleDeSport/> :null}
          {this.state.showPromotionEvent ?<PromotionEvent/> :null}
          {this.state.showProfilcoach ?<Profilcoach/> :null}

          
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>

            
      </div>
    )
  }
}
export default PageSalleDeSport;