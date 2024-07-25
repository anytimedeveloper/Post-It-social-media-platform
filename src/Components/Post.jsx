import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/PostListStore";


 

function Post({post}) {
  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{width: "23rem"}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
      onClick={()=>{deletePost(post.id)}}>
      <MdDelete />
    <span className="visually-hidden">unread messages</span>
  </span>
  </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag)=>(<span key ={tag} className="badge text-bg-warning tags">{tag}</span>))}
      <div className="alert alert-success reactions" role="alert">
       You have {post.reactions.likes} likes.
</div>
    </div>
  </div>
  )
}

export default Post
