import React from 'react';
import faker from 'faker';
import CommentDetail from '../components/CommentDetail';
import ApprovalCard from '../components/ApprovalCard';

const CommentsApp = () => {
  return (
    <div className="ui conatiner comments">
{/*       <ApprovalCard >
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard > */}
      <ApprovalCard >
        <CommentDetail
          avatar={faker.image.avatar()}
          author="John"
          timeAgo="Posted 3hrs ago"
          content="The weather is good!" />
      </ApprovalCard >
      <ApprovalCard >
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Bob"
          timeAgo="Posted 1 day ago"
          content="This news is awesome." />
      </ApprovalCard >
      <ApprovalCard >
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Vince"
          timeAgo="Posted 2 days ago"
          content="This is the first comment." />
      </ApprovalCard >
    </div>
  );
}

export default CommentsApp;