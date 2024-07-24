import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [suprise, setSuprise] = useState({ game: "cricket", captain: "Dhoni" });

  return (
    <GiftContext.Provider value={{ suprise, setSuprise }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useData = () => useContext(GiftContext);

/*
createContext
provider function
custom component 
custom hook
 */
