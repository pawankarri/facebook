import { Avatar } from "@mui/material";
import { Component } from "react";
import './mainpage.css'
class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    state = {  }
    render() { 
        return ( 
            <div className="imagelayout_container">
                <div className="imagelayout_imglay">
                    <Avatar className="imagelayout_img" src={this.props.image}/>

                </div>
                <div className="imagelayout_text">
                    {this.props.text}

                </div>

            </div>
         );
    }
}
 
export default ImageLayout;