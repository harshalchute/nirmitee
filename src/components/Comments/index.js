import React, { useEffect, useState } from "react";

import CommentBody from "./body";

export default function Comments({ post, comments, setComments }) {

    return (<div>
        {comments && comments.length > 0 ? comments.slice(0).reverse().map((comment, index) => (<div className="card bg-light mb-3" key={index} >
            <CommentBody post={post} comment={comment} setComments={setComments} />
        </div>)) : ''}
    </div>);
}