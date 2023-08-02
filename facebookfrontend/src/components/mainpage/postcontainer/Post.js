import { Avatar, Paper } from '@mui/material';
import {Component} from 'react'
import './postcontainer.css'
import post from '../../../images/images/post.jpeg'
import like from '../../../images/images/like.png'
import likebutton from '../../../images/images/likebutton.png'
import comment from '../../../images/images/comment.png'
import share from '../../../images/images/share.png'
import UploadSection from '../uploadsection/UploadSection';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <Paper className='post_container'>
                <div className='post_header'>
                    {/* header */}
                    <div className='post_header_img'>
                        <Avatar/>
                    </div>
                    <div className='post_header_text'>
                        pawan
                    </div>
                </div>
                <div>
                    {/* description */}
                    <div className='post_description'>
                        wow...
                    </div>
                </div>
                <div className='post_image'>
                    {/* image */}
                    <div>
                        <img src={post} width='600px'/>
                    </div>
                </div>
                <div className='post_likecontainer'>
                    {/* like count */}
                    <div className='post_like'>
                        <div>
                            <img src={like}  className='post_img'/>
                        </div>
                        <div className='post_likecount'>
                            25
                        </div>
                    </div>
                </div>
                <div className='post_lcs'>
                    {/* like share box */}
                    <div className='post_lcs2'>
                    <div >
                        <img src={likebutton} width='35px' />
                    </div>
                    <div>
                        Like
                    </div>
                    </div>
                    <div className='post_lcs2'>
                    <div >
                        <img src={comment} width='35px' />
                    </div>
                    <div>comment</div>
                    </div>
                   <div className='post_lcs2'>
                   <div>
                        <img src={share} width='35px' />
                    </div>
                    <div>
                        share
                    </div>
                   </div>
                </div>
                <div>
                    {/* comment box */}
                    <div className='upload_top'>
                    <div>
                        <Avatar className='upload_img'/>
                    </div>
                    <div>
                        <input className='upload_box'placeholder="what's on your mind" type='text'/>
                    </div>

                </div>
                </div>




               </Paper>
            </div>
         );
    }
}
 
export default Post;