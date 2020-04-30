import React from 'react';
import ScrollToBottmon from 'react-scroll-to-bottom';
import './Messages.css';
import Message from './Message/Message';
const Messages = ({ messages, name }) => (
	<ScrollToBottmon className="messages">
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottmon>
);
export default Messages;
