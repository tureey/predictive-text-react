import * as React from 'react';
import glamorous from "glamorous";

import UserMessages from "./UserMessages";

const Conversation = (props:any) => {
  return (
    <ConversationStyles>
      { props.conversation.messages.length > 0 &&
        props.conversation.messages.map((groupOfMessages: any, i: number) => {
          return <UserMessages key={i} groupOfMessages={groupOfMessages} />;
        })
      }
    </ConversationStyles>
  );
};
export default Conversation;


const ConversationStyles = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  maxHeight: '100%',
  boxSizing: 'border-box',
  height: 170,
});
