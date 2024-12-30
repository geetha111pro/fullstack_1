async function likeCode(flag) {
    return new Promise((resolve) => {
        if (flag === 1) {
            resolve("Post liked successfully.");
        } else if (flag === 0) {
            resolve("Post unliked successfully.");
        } else {
            resolve("Invalid like action.");
        }
    });
}

async function commentCode(action) {
    return new Promise((resolve) => {
        if (action === "comment") {
            resolve("Comment added successfully.");
        } else if (action === "uncomment") {
            resolve("Comment removed successfully.");
        } else {
            resolve("Invalid comment action.");
        }
    });
}

async function postCode(action) {
    return new Promise((resolve) => {
        if (action === "create") {
            resolve("Post created successfully.");
        } else if (action === "unpost") {
            resolve("Post deleted successfully.");
        } else {
            resolve("Invalid post action.");
        }
    });
}

async function shareCode(action) {
    return new Promise((resolve) => {
        if (action === "share") {
            resolve("Post shared successfully.");
        } else {
            resolve("Invalid share action.");
        }
    });
}


async function performActions() {
    const likeFlag = 0; 
    const commentAction = "uncomment"; 
    const postAction = "unpost"; 
    const shareAction = "share"; 

    const [likeResult, commentResult, postResult, shareResult] = await Promise.all([
        likeCode(likeFlag),
        commentCode(commentAction),
        postCode(postAction),
        shareCode(shareAction),
    ]);

    console.log(likeResult);
    console.log(commentResult);
    console.log(postResult);
    console.log(shareResult);
}

performActions();
