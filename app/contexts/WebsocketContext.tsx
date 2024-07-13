import React, { useEffect, useState } from 'react';
import type { Options } from 'react-use-websocket';
import useWebsocket, { ReadyState } from 'react-use-websocket';

interface WebsocketContextValues {
  readyState: ReadyState;
  messageData?: any;
  socket?: any;
}

export const WebsocketContext = React.createContext<WebsocketContextValues>({
  readyState: ReadyState.UNINSTANTIATED,
  messageData: null,
  socket: null,
});

interface WebsocketContextProviderProps {
  children: any;
  websocketUrl: string;
  identifier: string | null;
}

export const WebsocketContextProvider: React.FC<
  WebsocketContextProviderProps
> = (props: WebsocketContextProviderProps) => {
  const url = props.websocketUrl;
  const identifier = props.identifier;
  const [newMessage, setNewMessage] = useState<any>(null);

  let option: Options = {
    shouldReconnect: () => true,
  };

  if (identifier) {
    option = {
      ...option,
      queryParams: { identifier: identifier },
    };
  }

  const { lastMessage, readyState } = useWebsocket(url, option);

  useEffect(() => {
    if (lastMessage !== null) {
      setNewMessage(JSON.parse(lastMessage.data));
    }
  }, [lastMessage, setNewMessage]);

  return (
    <WebsocketContext.Provider
      value={{
        readyState,
        messageData: newMessage,
      }}
    >
      {props.children}
    </WebsocketContext.Provider>
  );
};
