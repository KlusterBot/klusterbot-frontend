import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your navigation state
interface NavState {
  isOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

// Create the context
const NavContext = createContext<NavState | undefined>(undefined);

// Create a provider component to wrap your app
export const NavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }
  const closeNav = () => {
    setIsOpen(false);
  }

  return (
    <NavContext.Provider value={{ isOpen, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Create a custom hook to access the navigation state
export const useNav = (): NavState => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
