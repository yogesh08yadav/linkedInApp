import React from 'react'
import './FeedOptions.css'

// Always add props in { }
export default function FeedOptions({Icon , title , color}) {
    return (
        <div className="feedOptions">
            <Icon style={{color : color}} />
            <h4>{title}</h4>
        </div>
    )
}
