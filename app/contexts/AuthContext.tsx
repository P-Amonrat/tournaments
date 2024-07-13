import React from "react";

interface AuthContextData {
  user: any;
  logout: () => void;
  openLoginModal: () => void;
  clickedId?: string;
  isStickerDrop?: boolean;
}

export const AuthContext = React.createContext<AuthContextData>({
  user: null,
  logout: () => {},
  openLoginModal: () => {},
  clickedId: undefined,
  isStickerDrop: false,
});
