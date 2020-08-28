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
        <SiderbarRow src='https://lh3.googleusercontent.com/-E8oIjkkNRR4/XwaD-hkoHUE/AAAAAAAAAFY/GJXsKvb4nQ43F4WetSvRkFIxamv8ycGzACEwYChgbKtQDAL1OcqznXRaP3f-xVPT7CSZYnmLMmtuMzGdD6TcvXgJQa1UMJlhRutncSF4EFZfBRtVYo65mWzTNWOJfqdkYDexRz_DppwiDi9R8S-QODew1GGW82Nk6gj4GCMeyV3Foj5TiX1PyYAzwnfKgHalRPhgoBlRR-nMStqH232UX8bDUTmzcLXMX-Z8WBgRVjGrCy0Z8QsrmsYMnWQEGZ3RDYvT4telRIZrXb4GpLANjk2Bdj0Kpu14KHWDqpx6fHuiLYrnXXqPt8A29-EeorXL8G8zQYvC7-Z6u6ei3VASuiAjcwLyioO0Czyvd7koxnJZ4P0ITfvT2gajtIL2j3HA4YNfr1phfNOsu_SagrCdHXkmeNy9p5sNlyJeQ86YklxMl9xN8wSVk5C3UGy5uI9BPA6Zui5hp3CyYXBDB935RL4Vtn-M9cD13Pen7FU8SyRI7cxTVXK4v-Q8YNAyo_kD1ADAVDR17jDs6a_4C1F9IgR132HkUoodyoEd2r1wxUYHuKGVRYOADs2rVvTzs7Vesijo3pSazgFVLytz2yB_ncNm7GZExNxiLwuA7dDDKKPEc0SXS9vSxb77WEINpQA8OKU52MV8tLJYfqkoZBMQumaHJaUv1MJ2MpfoF/w163-h110-p/6847305393650539841' 
        title='barbaro'/>
        <SiderbarRow Icon={EmojiFlagsIcon} title='pages'/>
        <SiderbarRow Icon={PeopleIcon} title ='friends'/>
        <SiderbarRow  Icon={ ChatIcon}  title='mesenger'/>
        <SiderbarRow Icon={StorefrontIcon} title= 'markerplace'/>
        <SiderbarRow Icon={ VideoLibraryIcon}  title ='videos'/>
        <SiderbarRow Icon={  ExpandMoreIcon}  title ='more'/>
       
            
       
         </div>
}
export default Siderbar