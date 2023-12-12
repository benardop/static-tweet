import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author/>
        <Message/>
        <Time/>
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
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Tweet />
)