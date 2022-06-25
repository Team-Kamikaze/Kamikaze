import React from 'react'
import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/router'
TimeAgo.addDefaultLocale(en)


function VideoCard({item}) {
  const router = useRouter()
    const {id:{videoId} ,snippet: {title, description,channelTitle,publishTime, thumbnails:{medium:{url}} }} = item;
    const timeAgo = new TimeAgo('en-US');

    console.log(item)

    
  return (
    <div onClick = {() => router.push(`/videos/${videoId}`)} >
        <img className="w-full" src={url} />
        <p className="text-sm font-semibold">{title}</p>
        <span className="text-xs text-gray-500">{channelTitle} </span>
        .
        <span className="text-xs text-gray-500"> { timeAgo.format((new Date().getTime()) - (new Date().getTime() - new Date(publishTime).getTime()))}</span>
    </div>
  )
}

export default VideoCard