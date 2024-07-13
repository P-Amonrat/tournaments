import React from 'react';

interface UserNotificationContextData {
  count: number;
}

export const UserNotificationContext =
  React.createContext<UserNotificationContextData>({
    count: 0,
  });
