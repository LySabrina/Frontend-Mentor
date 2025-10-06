import { useState, createContext, useRef } from "react";

const ConfirmContext = createContext(null);

export default function ConfirmProvider({ children }) {
  const modal = useRef();

  return (
    <ConfirmContext.Provider value={{ modal }}>
      {children}
    </ConfirmContext.Provider>
  );
}

export { ConfirmContext };

/**
 * Inital issue where we had ref on the Confirm.jsx
 * But users would need to select another item again after the first one to be able to
 * confirm their order [OR press the confirm twice]
 *
 * First timee click is when the confirmed is turn to truth then Confirm will render and pass the ref.
 *
 * This is because we were using truthy values to determine whether to render the Confirm so the ref would not activate immediately
 *
 */
