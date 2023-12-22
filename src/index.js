import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment/moment';
import PropTypes from 'prop-types'
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

Avatar.propTypes = {
  hash: PropTypes.string
};


function Message({text}) {
  return (
    <div className='message'>
      {text}
    </div>
  )
}
Message.propTypes = {
  text: PropTypes.string
};

function Author({author}) {
  const {name, handle} = author;
  return (
    <span>
       <span className='name'>{name}</span>
       <span className='handle'>@{handle}</span>
    </span>
  )
}

Author.propTypes = {
  Author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}

const Time = ({time}) => (
  <span> {moment(time).fromNow()} </span>
)

Time.propTypes = {
  time: PropTypes.string
};

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = ({count}) => (
  <span className='retweet-button'>
    <i className="fa fa-retweet"/>
      <Count count={count} />
  </span>
);
RetweetButton.propTypes = {
  count: PropTypes.number
};

const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart'/>
       {count > 0 &&
          <span className='like-count'>
            {count}
          </span>}
  </span>
)
LikeButton.propTypes = {
  count: PropTypes.number
};

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

const AddressLabel= ({person}) => {
  return (
     <div className='person'>
       <Person address={person.address}/>
     </div>
  )
}

const Person =({address}) => {
  const { name, street, state} = address;
  return (
    <div>
      <div className='name'>{name}</div>
      <div className='street'>{street}</div>
      <div className='state'>{state}</div>
    </div>
  )
}

const personObject = {
    address: {
      name: "John Doe",
      street: "128 Fake Stree",
      state: "San Francisco, CA 94110"
   },
   fromPerson: {
      name: "Mr John Doe",
      street: "128 Fake Stree",
      state: "San Francisco, CA 94110"
   },
   toPerson: {
    name: "Mrs. John Doe",
    street: "1115 Fake Stree",
    state: "Boston, MA 94110"
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
  <div className='components'>
   <Tweet tweet={testTweet} />
   <AddressLabel person={personObject}/>
  </div>
)