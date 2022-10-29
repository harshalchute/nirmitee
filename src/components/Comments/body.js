import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Container, FormLabel, Modal, Button } from 'react-bootstrap';

import { editCmtById, deleteCmtById } from "../../actions";


export default function CommentBody({ post, comment, setComments }) {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [content, setContent] = useState(comment.body);

    const handleCmtUpdate = (e, commentId) => {
        e.preventDefault();
        if (content) {
            // console.log(content, commentId)
            dispatch(editCmtById(commentId, post.id, { body: content, postId: post.id })).then((data) => {
                setComments(data);
                handleClose();
            })
        }
    }

    const handleCmtDelete = (e, commentId) => {
        e.preventDefault();
        dispatch(deleteCmtById(commentId, post.id)).then((data) => {
            setComments(data);
        });
    }

    const handleCancel = () => {
        handleClose();
        setContent('');
    }

    return (<div>

        {show ?
            <div className="input-group">
                <input type="textarea"
                    className="form-control"
                    placeholder="comment"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={content}
                    onChange={e => setContent(e.target.value)} />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        disabled={content ? false : true}
                        onClick={(e) => handleCmtUpdate(e, comment.id)}
                    >
                        <i className="far fa-comment"></i>
                    </button>
                </div>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        disabled={!content ? false : true}
                        onClick={handleCancel}
                    >
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            : <div className="p-2">{comment.body}</div>}
        <small>
            {show ? '' : <div>
                <button className="btn ml-1" type="button" onClick={handleShow} >
                    <i className="far fa-edit"></i>
                </button>
                <button className="btn" type="button" onClick={(e) => { handleCmtDelete(e, comment.id) }} >
                    <i className="fa fa-trash"></i>
                </button>
            </div>}
        </small>


    </div>);
}