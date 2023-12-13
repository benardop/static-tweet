import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Tweet({tweet}) {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author/><Time/>
        <Message/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionButton/>
        </div>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <img
      src='https://www.gravatar.com/avatar/nothing'
      alt='avatar'
      className='avatar' />
  )
}

function Message() {
  return (
    <div className='message'>
      This is less than 140 characters
    </div>
  )
}

function Author() {
  return (
    <span>
       <span className='name'>Benard</span>
       <span className='handle'>@bepacho</span>
    </span>
  )
}

const Time = () => (
  <span className='time'>3h ago</span>
);

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
)

const LikeButton = () => (
  <i className='fa fa-heart like-button'/>
)

const MoreOptionButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
)

const testTweet = {
  message: "Something about cats",
  gravatar: "XYZ",
  author: {
    handle: "catperson",
    name: "I am a Cat person"
  },
  like: 2,
  retweets: 0,
  timestamp: "2023-12-13 10:05:35"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Tweet tweet={testTweet} />
)