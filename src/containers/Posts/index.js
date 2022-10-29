import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Modal, Form, InputGroup, FormLabel, Row } from "react-bootstrap";

import "./style.css";

import { getAllPost, createPost } from "../../actions";
import PostList from "../../components/PostList";

export default function Posts() {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    const handleSubmit = () => {
        if (title && content) {
            dispatch(createPost({ title: title, body: content })).then(() => handleClose());
        }
    }

    // const handleReload = () => {
    //     dispatch(getAllPost()).then((response) => { console.log(response) })
    // }

    return (<Container>

        <div className='post-create-btn'>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Add Post
            </Button>
            {/* <Button variant="primary" size="sm" onClick={handleReload}>
                Reload
            </Button> */}
        </div>

        <br />
        <div>
            <PostList />
        </div>

        <Modal show={show} onHide={handleClose}>
            <Container>

                <div className='post-model-title'>
                    <FormLabel>Create Post</FormLabel>
                    <Button variant="primary" type="button" size="sm" onClick={handleSubmit}>
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

    </Container>)
};