import {Component} from 'react'
import './uploadsection.css'
import { Avatar, Paper } from '@mui/material';
import video from '../../../images/images/video.png'
import image from '../../../images/images/image.png'
import feeling from '../../../images/images/feelings.png'
class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Paper className='upload_container'>
                <div className='upload_top'>
                    <div>
                        <Avatar className='upload_img'/>
                    </div>
                    <div>
                        <input className='upload_box'placeholder="what's on your mind" type='text'/>
                    </div>

                </div>
                <div className='upload_bottom'>
                    <div className='upload_tabs'>
                      <img src={video} width='35px'/>
                      <div>Live Video</div>

                    </div>
                    <div className='upload_tabs'>
                    <img src={image} width='35px'/>
                    <div>Photo/Video</div>

                    </div>
                    <div className='upload_tabs'>
                    <img src={feeling} width='35px'/>
                    <div>feeling/Activity</div>

                    </div>

                </div>
                </Paper>

            </div>
         );
    }
}
 
export default UploadSection;