import React,{Component} from "react";
import './mainpage.css'
import { Grid } from "@mui/material";
import LeftSide from "./leftsidepanel/Leftside";
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
                <Grid item xs={6}>middle</Grid>
                <Grid item xs={3}>right</Grid>

               </Grid>
            </div>
        )
    }
}
 export default Layout