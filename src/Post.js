import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import FeedOptions from './FeedOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
              <FeedOptions Icon={ThumbUpOffAltOutlined} title="Like" color="gray" />
              <FeedOptions Icon={ChatOutlined} title="Comment" color="gray" />
              <FeedOptions Icon={ShareOutlined} title="Share" color="gray" />
              <FeedOptions Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
})      

export default Post
