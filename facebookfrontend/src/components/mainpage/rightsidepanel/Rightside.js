import {Component} from 'react'
import './rightside.css'
import ImageLayout from '../ImageLayout'
import { Avatar } from '@mui/material';
class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    getData=()=>{
        let jsondata=[
            {
                "image":Avatar,
                "text":"Nikhil"
            },
            {
                "image":Avatar,
                "text":"Mahesh"
            },
            {
                "image": Avatar,
                "text":"Gopal"
            },
            {
                "image":Avatar,
                "text":" Imran"
            },
            {
                "image":Avatar,
                "text":"Panda"
            },
            {
                "image":Avatar,
                "text":"..........."
            }
        ]
        this.setState({data: jsondata})
    }
    componentDidMount(){
        this.getData()
    }
    
    state = {  }
    render() { 
        return ( 
            <div  className='rightside_container'>
                <div className='rightside_header'>
                    contacts
                </div>
                <div className='rightside_content'>
                {
                this.state.data.map((item)=>{
                    return(
<ImageLayout image={item.image} text={item.text}/>
                    )

                })
            }

                </div>

            </div>
         );
    }
}
 
export default RightSide;