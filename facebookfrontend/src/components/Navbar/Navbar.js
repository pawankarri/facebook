import React, { Component, createContext } from 'react'
import './navbar.css'
import { Avatar, Grid } from '@mui/material'
import fblogo from '../../images/images/logo.png'
import home from '../../images/images/home.svg'
import page from  '../../images/images/pages.png'
import watch from '../../images/images/watch.svg'
import market from '../../images/images/market.svg'
import group from '../../images/images/groups.png'
import upload from '../../images/images/upload.png'
import messager from '../../images/images/messenger.svg'
import notification from '../../images/images/notification.svg'
import memories from '../../images/images/memories.png'
class Navbar extends Component{
    constructor(props)
    {
        super(props)
        this.state={}
    }
    render()
    {
        return(
            <div>
                <Grid container className='navbar_main'>
                    <Grid item xs={3}>
                       <div className='navbar_leftbar'>
                        <img className='navbar_logo'src={fblogo} width='35px'/>
                        <input className='navbar_search' type='text' placeholder='search Facebook'/>
                       </div>
                       </Grid>
                    <Grid item xs={6} >
                       <div className='navbar_container'> 
                       <div className='navbar_tabs active'>
                        <img src={home} height='35px' width='35px'/>
                       </div>
                       <div className='navbar_tabs'>
                        <img src={page} height='35px' width='35px'/>
                       </div>
                       <div className='navbar_tabs'>
                        <img src={watch} height='35px' width='35px'/>
                       </div>
                       <div className='navbar_tabs'>
                        <img src={market} height='35px' width='35px'/>
                       </div>
                       <div className='navbar_tabs'>
                        <img src={group} height='35px' width='35px'/>
                       </div>
                       
                        </div></Grid>
                    <Grid item xs={3}>
                        <div className='navbar_right'>
                         <div className='navbar_righttab'>
                            <Avatar className='navbar_rightimg'/>
                         </div>
                         <div className='navbar_profilename'>Pawan</div>
                         <div className='rightside_nav1'><img src={upload} height='35px' width='35px' style={{margin:'10px 0px 0px 5px'}} /></div>
                         <div className='rightside_nav2'><img src={messager} height='35px' width='35px' style={{margin:'10px 0px 0px 10px'}} /></div>
                         <div className='rightside_nav3'><img src={notification} height='35px' width='35px' style={{margin:'10px 0px 0px 10px'}}/></div>
                         <div className='rightside_nav4'><img src={memories} height='35px' width='35px' style={{margin:'10px 0px 0px 5px'}}/></div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}
export default Navbar;