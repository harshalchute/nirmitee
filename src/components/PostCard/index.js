import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Container, FormLabel, Modal, Button } from 'react-bootstrap';

import { deletePostById, editPostById } from "../../actions";
import Comments from "../Comments";
import { addCmt, getPostByIdToCmt, getPostByIdCmt } from "../../actions";

export default function PostCard({ post }) {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts);

    // const comments = useSelector(state => state.comments);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.body);

    const [comment, setComment] = useState('');

    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState([]);
    const [next, setNext] = useState(1);

    const [replyComments, setReplyComments] = useState([]);

    useEffect(() => {
        // dispatch(getPostByIdCmt(post.id))
        dispatch(getPostByIdCmt(post.id)).then((data) => {
            console.log(data)
            setComments(data);
            setShowComments(data.slice(data.length - next));
        });
    }, [])

    const handlePostDelete = (e, postId) => {
        e.preventDefault();
        console.log(postId)
        dispatch(deletePostById(postId));
    }

    const handleComment = (e, postId) => {
        e.preventDefault();
        console.log(comment, postId)
        dispatch(addCmt(postId, { body: comment, postId: postId })).then((data) => {
            setComments(data);
        })
    }

    const handleSubmitEdit = (e, postId) => {
        if (title && content) {
            dispatch(editPostById(postId, { title: title, body: content })).then(() => handleClose());
        }
    }


    return (<div>
        <Card style={{ width: '22rem' }}>
            <Card.Header as="h5">
                <Row>
                    <Col>
                        {post.title}
                    </Col>
                    <Col xs lg="4" className="d-flex">
                        <button className="btn ml-1" type="button" onClick={handleShow} >
                            <i className="far fa-edit"></i>
                        </button>
                        <button className="btn" type="button" onClick={(e) => { handlePostDelete(e, post.id); }} >
                            <i className="fa fa-trash"></i>
                        </button>

                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
            <div>
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        placeholder="comment"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={comment}
                        onChange={e => setComment(e.target.value)} />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            disabled={comment ? false : true}
                            onClick={(e) => {
                                handleComment(e, post.id);
                            }}
                        >
                            <i className="far fa-comment"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Card.Footer>
                <Comments post={post} comments={comments} setComments={setComments} />
            </Card.Footer>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Container>

                <div className='post-model-title'>
                    <FormLabel>Edit Post</FormLabel>
                    <Button
                        variant="primary"
                        type="button"
                        size="sm"
                        onClick={(e) => {
                            handleSubmitEdit(e, post.id);
                        }}
                    >
                        Submit
                    </Button>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label="Post Title"
                        aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Content</span>
                    </div>
                    <textarea
                        className="form-control"
                        placeholder="Post Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        aria-label="Post Content"
                    ></textarea>
                </div>


            </Container>
            <br />
        </Modal>
    </div>);
}