import React from "react";

import CommentEntry from "./CommentEntry";
import ApprovalCard from "../ApprovalCard";


const Comments = (props) => {
  const entries = props.entries;
  const comments = [];

  for (const [idx, entry] of entries.entries()) {
    const { author, avatar, date, text } = entry;
    console.log(`Avatar URL: ${avatar}`);
    comments.push(
      <ApprovalCard key={idx}>
        <CommentEntry
          author={author}
          avatar={avatar}
          date={date}
          text={text}
        />
      </ApprovalCard>
    );
  }

  return <div className="ui container comments">{comments}</div>;
};

export default Comments;
