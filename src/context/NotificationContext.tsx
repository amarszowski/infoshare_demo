import React, { createContext, useContext, useState } from "react";

interface NotificationContextProps {
  notification: {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error";
  };
  showNotification: (
    message: string,
    severity: "success" | "info" | "warning" | "error",
  ) => void;
  closeNotification: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "info" | "warning" | "error",
  });

  const showNotification = (
    message: string,
    severity: "success" | "info" | "warning" | "error",
  ) => {
    setNotification({ open: true, message, severity });
  };

  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, closeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
