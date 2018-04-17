import * as React from 'react';
import glamorous from "glamorous";

import Keyboard from "./Keyboard";
import Screen from "./Screen";
import Chat from "./Chat";

interface PhoneState {
  isKeyboardShown: boolean,
  message: string,
  conversation: object,
}

class Phone extends React.Component<{}, PhoneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isKeyboardShown: true,
      message: '',
      conversation: {
        messages: [
          {
            user: {
              name: 'Victor Ribero',
              avatar: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4',
            },
            data: [
              'To start, start typing on the chatbox',
              'Don\'t forget to check my website www.victorribero.com',
            ],
          }
        ],
      },
    };
  }

  _handleOnChatBoxChange(value: string) {
    console.log(value);
  }

  render() {
    return (
      <PhoneStyles>
        <Screen>

          <Chat
            message={this.state.message}
            conversation={this.state.conversation}
            onChatBoxChange={(value: string) => this._handleOnChatBoxChange(value)}
          />
          {this.state.isKeyboardShown && <Keyboard/>}

        </Screen>
      </PhoneStyles>
    );
  }
}

export default Phone;


const PhoneStyles = glamorous.main({
  borderRadius: '6px',
  background: 'black',
  paddingTop: '40px',
  paddingBottom: '60px',
  boxShadow: '0 0 1em 0.25em rgba(0,0,0,0.2)',
  width: '300px',
  height: '450px',
  overflow: 'hidden',
});
