import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment/moment';
import './index.css';

function Tweet({tweet}) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionButton/>
        </div>
      </div>
    </div>
  )
}

function Avatar({hash}) {
  hash = '1b213095f92fce9318450a07ca90fd05';
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      alt='avatar'
      className='avatar' />
  )
}

function Message({text}) {
  return (
    <div className='message'>
      {text}
    </div>
  )
}
function Author({author}) {
  const {name, handle} = author;
  return (
    <span>
       <span className='name'>{name}</span>
       <span className='handle'>@{handle}</span>
    </span>
  )
}
const Time = ({time}) => (
  <span> {moment(time).fromNow()} </span>
)

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = ({count}) => (
  <span className='retweet-button'>
    <i className="fa fa-retweet"/>
      <Count count={count} />
  </span>
)

const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart'/>
       {count > 0 &&
          <span className='like-count'>
            {count}
          </span>}
  </span>
)

const MoreOptionButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
)
function Count({count}) {
  if(count > 0) {
    return (
      <span className='retweet-count'>
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const testTweet = {
  message: "Something about cats",
  gravatar: "XYZ",
  author: {
    handle: "catperson",
    name: "I am a Cat person"
  },
  likes: 2,
  retweets: 4,
  timestamp: "2023-12-13 10:05:35"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Tweet tweet={testTweet} />
)