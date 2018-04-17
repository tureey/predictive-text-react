import * as React from 'react';
import glamorous from "glamorous";
import Message from "./Message";

const UserMessageStyles = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: '150px',
  overflowY: 'auto',
});

const Avatar = glamorous.img({
  width: '40px',
  height: '40px',
  borderRadius: '500px',
  border: '1px solid #efefef',
});

const BlockMessagesStyles = glamorous.div({
  marginLeft: '10px',
});

const UserMessages = (props:any) => {
  return (
    <UserMessageStyles>

      <Avatar
        src={props.userMessages.user.avatar}
        alt={`Avatar of ${props.userMessages.user.name}`}
      />

      <BlockMessagesStyles>
        {props.userMessages.user.messages.map((msg: string, i: number) => {
          return <Message key={i} text={msg} />
        })}
      </BlockMessagesStyles>

    </UserMessageStyles>
  );
};
export default UserMessages;