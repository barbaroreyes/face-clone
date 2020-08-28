import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import './header.css'
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


 function Header () {
     return  <div className='header'>
         <div className='header_left'>
             <img alt ='' 
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png'
             />
             <div className ='header_input'>
               <SearchIcon/>
               <input type='search' placeholder='search something'/>
             </div>
         </div>
         <div className='header_center'>
             <div className='header_options'>
                 <HomeIcon fontSize='large'/>
            </div>
            <div className='header_options'>
            <  FlagIcon fontSize='large'/>
            </div>
            <div className='header_options'>
            <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header_options'>
            <StorefrontIcon fontSize='large'/>
            </div>
            <div className='header_options'>
            < SupervisedUserCircleIcon fontSize='large'/>
            </div>
         </div>
         <div className='header_right'>
             <div className ='header_info'>
                 <Avatar/>
                 <h4>Barbaro Reyes</h4>
             </div>
             <IconButton>
                 <AddIcon/>
             </IconButton>
             <IconButton>
                 <ForumIcon/>
             </IconButton>
             <IconButton>
                 <NotificationsActiveIcon/>
             </IconButton>
             <IconButton>
                 <ExpandMoreIcon/>
             </IconButton>

         </div>
     </div>
     
 }
export default Header


