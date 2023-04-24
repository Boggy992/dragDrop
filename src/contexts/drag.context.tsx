import React, { createContext, useState } from 'react';

interface DragContextProps {
  pastIndex: number;
  setPastIndex: (index: number) => void;
}

interface DragProviderProps {
  children: Array<JSX.Element> | JSX.Element;
}

const defaultState = {
  pastIndex: -1,
  setPastIndex: () => {},
};

export const DragContext = createContext<DragContextProps>(defaultState);

const DragProvider = ({ children }: DragProviderProps) => {
  const [pastIndex, setPastIndex] = useState<number>(-1);

  const value = { pastIndex, setPastIndex };

  return <DragContext.Provider value={value}>{children}</DragContext.Provider>;
};

export default DragProvider;
