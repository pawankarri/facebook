import React,{Component} from "react";
import './mainpage.css'
import { Grid } from "@mui/material";
import LeftSide from "./leftsidepanel/Leftside";
import StatusBar from "./statusbar/StatusBar";
import UploadSection from "./uploadsection/UploadSection";
import PostContainer from "./postcontainer/PostContainer";
import RightSide from "./rightsidepanel/Rightside";
class Layout extends Component{
    constructor(props)
    {
        super(props)
        this.state={}
    }
    render()
    {
        return(
            <div className="mainpage_container">
               <Grid container>
                <Grid item xs={3}><LeftSide/></Grid>
                <Grid item xs={6} className="middle_container"><StatusBar/><UploadSection/><PostContainer/></Grid>
                <Grid item xs={3}><RightSide/></Grid>

               </Grid>
            </div>
        )
    }
}
 export default Layout
