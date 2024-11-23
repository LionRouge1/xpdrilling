import { createContext, useState } from 'react';
type SizeContextType = { size: number; setSize: React.Dispatch<React.SetStateAction<number>>; }

export const SizeContext = createContext({} as SizeContextType);

export const SizeProvider = ({ children }: {children: React.ReactNode}) => {
  const [size, setSize] = useState<number>(400);

  return (
    <SizeContext.Provider value={{ size, setSize }}>
      {children}
    </SizeContext.Provider>
  );
};