import {Component} from 'react'
import './postcontainer.css'
import Post from './Post';
class PostContainer extends Component {
    constructor(props) {
        super(props);
       

    }

    render() { 
        return ( 
            <div>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
              

            </div>
         );
    }
}
 
export default PostContainer;