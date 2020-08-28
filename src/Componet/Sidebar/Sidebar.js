import React from 'react';
import './Siderbar.css'
import SiderbarRow from '../SidebarRow/SidebaeRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Siderbar (){
    return <div className='sidebar'>
        <SiderbarRow Icon={EmojiFlagsIcon} title='pages'/>
        <SiderbarRow Icon={PeopleIcon} title ='friends'/>
        <SiderbarRow  Icon={ ChatIcon}  title='mesenger'/>
        <SiderbarRow Icon={StorefrontIcon} title= 'markerplace'/>
        <SiderbarRow Icon={ VideoLibraryIcon}  title ='videos'/>
        <SiderbarRow Icon={  ExpandMoreIcon}  title ='more'/>
       
            
       
         </div>
}
export default Siderbar