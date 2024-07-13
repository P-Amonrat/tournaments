import React from "react";

interface PartyContextValues {
  closePartyModal: (e: any) => void;
}

export const PartyContext = React.createContext<PartyContextValues>({
  closePartyModal: () => {},
});
