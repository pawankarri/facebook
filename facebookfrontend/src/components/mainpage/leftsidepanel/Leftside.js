import { Component } from "react";
import ImageLayout from "../ImageLayout";
import './leftside.css'
import covid from '../../../images/images/covid.png'
import groups from '../../../images/images/groups.svg'
import memories from '../../../images/images/memories.png'
import msgkids from '../../../images/images/messengerkids.png'
import ads from '../../../images/images/admanager.png'
import blood from '../../../images/images/blood.png'
class Leftside extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    getData=()=>{
        let jsondata=[
            {
                "image":covid,
                "text":"COVID-19 Information Centre"
            },
            {
                "image":groups,
                "text":"Friends"
            },
            {
                "image": memories,
                "text":"Memories"
            },
            {
                "image":msgkids,
                "text":"Messenger kids"
            },
            {
                "image":ads,
                "text":"Ads Manager"
            },
            {
                "image":blood,
                "text":"Blood Donations"
            }
        ]
        this.setState({data: jsondata})
    }
    componentDidMount(){
        this.getData()
    }
    
    render() { 
        return ( <div>
            {
                this.state.data.map((item)=>{
                    return(
<ImageLayout image={item.image} text={item.text}/>
                    )

                })
            }
            
           
        </div> );
    }
}
 
export default Leftside;