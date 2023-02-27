import Header from "./Header";
import Post from "./Post";
import userData from '../Mock-data/data.json'

const Wrapper = () =>{

    const userInfo = userData.user
    const userPost = userInfo.map(post => <Post key={post.name} data={post}/>)

    return(
        <>
            <Header/>
            <div className='parent-container'>
                <div className="container">
                    {userPost}
                </div>
            </div>
        </>
    )
}
export default Wrapper