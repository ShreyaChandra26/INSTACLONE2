import "./loading-css.css"
import {Link} from "react-router-dom"

const Loading = () =>{
    return(
        <div className="loding-parent">
        <div className="loding-page">
            <div className="image-section">
                <img className="team-image" src="https://th.bing.com/th/id/OIP.pKuNnk8zv8bVJ_9qoviMZQHaE8?pid=ImgDet&rs=1" alt="Loading..."/>
            </div>
            <div className="enter-section">
                <h2 className="x-heading">10X team 04</h2>
                <p>Welcome to Insta clone project </p>
                <Link to="/posts"><button className="enter-button">Enter</button></Link>
                
            </div>
        </div>
        </div>
    )
}
export default Loading;