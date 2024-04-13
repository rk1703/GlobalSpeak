"use client"

import ReactTime from "react-timeago";

export const TimeAgoText = ({date}:{date:string}) => {
  return (
    <ReactTime date={date} />
  )
}
