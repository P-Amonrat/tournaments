import React from "react";

interface LayoutContextValues {
  contentRef: any;
}

export const LayoutContext = React.createContext<LayoutContextValues>({
  contentRef: null,
});
