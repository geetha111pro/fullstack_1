//Post created successfully
//Comment posted successfully in the post.
//liked the post successfully .


async function likecode() {
    return new Promise((like)=>{
        like("liked the post successfully .")

    })
    
}

async function commentcode() {
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted successfully in the post.")

    })
    
}

async function createPost(){
    var post =new Promise((cPost)=>{
        cPost("Post created successfully")
    })
    var[post,comment,like] = await Promise.all([post,commentcode(),likecode()]) //should be in array and must have array
    console.log(post)
    console.log(comment)
    console.log(like)


}
createPost() 