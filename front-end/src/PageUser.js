import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import ProfilUser from './profilUser.js'
import EventPromotionlisteforuser from './events-promotionsEvent-foruserliste.js'
import Navbar from './navbar.js'

class PageUser extends Component {
 constructor(props) {
   super(props);
   this.state = {
     showProfilUser: true,
     showPromotionEventForUser: false,
   };
   this.toggleShowProfile = this.toggleShowProfile.bind(this);
   this.toggleShowPromotionEvent = this.toggleShowPromotionEvent.bind(this);


 }

 toggleShowProfile() {
   this.setState({
     showProfilUser: true,
     showPromotionEventForUser: false,
   });
 }

 toggleShowPromotionEvent() {
   this.setState({
       showProfilUser: false,
       showPromotionEventForUser: true,
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
       <div className='profile-User'style={{paddingTop: "70px"}}>
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
         </Sidebar>

         <Sidebar.Pusher style={{backgroundImage:"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/itCjTBE/grey-light-smooth-moving-waves-background-video-animation-hd-1920x1080_vjkea4zve__F0000.png"

        ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

         <Segment basic>
         {this.state.showProfilUser ?<ProfilUser/> :null}
         {this.state.showPromotionEventForUser ?<EventPromotionlisteforuser/> :null}

           </Segment>
         </Sidebar.Pusher>
       </Sidebar.Pushable>
       </div>


     </div>
   )
 }
}
export default PageUser;