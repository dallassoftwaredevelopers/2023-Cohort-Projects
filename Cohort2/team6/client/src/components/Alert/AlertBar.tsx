import { Alert, AlertIcon } from "@chakra-ui/react";
import "./AlertBar.css";
type AlertBarTypes = {
  message: string | null;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
};

const AlertBar = ({ message, status }: AlertBarTypes) => {
  return (
    <div className="error-alert">
      <Alert
        status={status}
        display="flex"
        justifyContent="center"
        borderRadius={4}
      >
        <AlertIcon />
        {message}
      </Alert>
    </div>
  );
};

export default AlertBar;
