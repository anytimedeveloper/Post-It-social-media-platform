import { useContext } from "react"
import Post from "./Post"
import { PostList as postListData } from "../store/PostListStore"
import NoPostMessage from "./NoPostMessage";

import LoadingSpinner from "./LoadingSpinner";




function PostList() {
  const {postList,fetching}= useContext(postListData);
  return (
<>
{fetching && <LoadingSpinner/>}
{!fetching && postList.length === 0 && <NoPostMessage />}
{!fetching && postList.map((post)=>(<Post key={post.id} post={post}/>))}

</>
  )
}

export default PostList
