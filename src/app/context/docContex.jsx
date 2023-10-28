import { createContext } from "react";

export const DocContext = createContext();

export function DocProvider({ children }) {
  <DocContext.Provider>{children}</DocContext.Provider>;
}
