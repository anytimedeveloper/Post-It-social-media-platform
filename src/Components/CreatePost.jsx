import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/PostListStore";
import { useNavigate } from "react-router-dom";

const CreatePost=()=>{
 
const navigate= useNavigate();
const {addPost}=useContext(PostList);
 const userIdElement = useRef();
 const titleElement = useRef();
 const bodyElement = useRef();
 const reactionsElement = useRef();
 const tagsElement = useRef();


 const handleonSubmit=(e)=>{
  e.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = titleElement.current.value;
  const postBody = bodyElement.current.value;
  const postReactions = reactionsElement.current.value;
  const postTags= tagsElement.current.value.split(" ");
  userIdElement.current.value=""
  titleElement.current.value=""
  bodyElement.current.value=""
  reactionsElement.current.value=""
  tagsElement.current.value=""

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title:postTitle,
    body:postBody,
    reactions:postReactions,
    userId:userId,
    tags:postTags
    /* other post data */
  })
})
.then(res => res.json())
.then((post)=>{
  addPost(post)
navigate("/");
});

  
 }
    return(
        <form className="create-post" onSubmit={handleonSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder="Enter your Id"/>
          </div>
          <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" ref={titleElement} placeholder="How are you feeling Today..."/>
          </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows="5" type="text" className="form-control" ref={bodyElement} id="body" placeholder="Write more about this..."/>
          </div>
          <div className="mb-3">
          <label htmlFor="reaction" className="form-label">Post Reactions</label>
          <input type="text" className="form-control" id="reaction" ref={reactionsElement} placeholder="How many people reacted.."/>
          </div>
          <div className="mb-3">
          <label htmlFor="tags" className="form-label">Post Tags</label>
          <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="Related tags..."/>
          </div>
        <button type="submit" className="btn btn-primary">Post</button>

      </form>
    );
}

export default CreatePost;