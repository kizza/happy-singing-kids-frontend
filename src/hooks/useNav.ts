import { createContext, MutableRefObject } from "react";

interface NavContextValue {
  openMenu: () => void
}

export const NavContext = createContext<NavContextValue>({
  openMenu: () => {},
});

export const useNav = (
) => {};
