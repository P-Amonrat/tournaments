import React from "react";

interface AppContextValues {
  allowCookies: boolean;
  baseUrl: string;
  locale: string;
  scheme: string;
  acceptCookies: (accepted: boolean) => void;
  changeLanguage: (language: string) => void;
  changeScheme: (scheme: string) => void;
}

export const AppContext = React.createContext<AppContextValues>({
  allowCookies: false,
  baseUrl: "",
  locale: "en",
  scheme: "light",
  acceptCookies: () => {},
  changeLanguage: () => {},
  changeScheme: () => {},
});
