import { Paper } from '@mui/material';
import React,{Component} from 'react'
class Status extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Paper className='statusbar_status'/>
            </div>
         );
    }
}
 
export default Status;