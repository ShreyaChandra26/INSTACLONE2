import share_icon from './icons/send.png'
import more from './icons/more.png'
import heart from './icons/heart.png'

const Post = (props) =>{
  
  const {data} = props
  
    return (
        <div className='post-container'>
            <div className="header">
              <div className="information">
                <h6 className="name">{data.name}</h6>
                <p className="location">{data.location}</p>
              </div>
              <div className="three-dot">
                <span><img className='more-icon' src={more}/></span>
              </div> 
              </div>
              <div className="image-box">
                <img className='post-image' src={data.PostImage}/>
              </div>
              <div className="footer">
                <span><img className='heart-icon' src={heart}/></span>
                <span><img className='send-icon' src={share_icon}/></span>
                <span className='date'>{data.date}</span>
                <p className='likes'>{data.likes} likes</p>
                <p className='titel'>{data.description}</p>
              </div>
        </div>
    )
}
export default Post