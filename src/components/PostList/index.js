import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import PostCard from "../PostCard";

export default function PostList() {

    const posts = useSelector(state => state.posts);

    return (<Row xs={1} md={2} className="g-4">
        {posts.posts.slice(0).reverse().map(post => (
            <Col className="d-flex mb-3">
                <PostCard post={post} />
            </Col>
        ))}
    </Row>);
}