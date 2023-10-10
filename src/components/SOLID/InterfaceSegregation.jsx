import React from 'react'

const postData = {
    title: 'hellow world',
    author: 'DiegoFandino',
    created: '2023'
};

/* Avoid pass all postData because its possible use interface segregation for specific data. */

const Post = ({post}) => {
    return (
        <div>
            <PostTitle post={post} />
            <span>author: </span>
            <PostDate post={post} />
        </div>
    )
}

const PostTitle = ({post}) => {
    return <h1>{post.title}</h1>
}

const PostDate = ({post}) => {
    return <time>{post.created}</time>
}

export const InterfaceSegregation = () => {
  return (
    <Post post={postData} />
  )
}
