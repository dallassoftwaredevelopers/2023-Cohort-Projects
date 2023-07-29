import { Alert, AlertIcon } from "@chakra-ui/react";
import "./AlertBar.css";
type Error = {
  error: string | null;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
};

const AlertBar = ({ error, status }: Error) => {
  return (
    <div className="error-alert">
      <Alert
        status={status}
        display="flex"
        justifyContent="center"
        borderRadius={4}
      >
        <AlertIcon />
        {error}
      </Alert>
    </div>
  );
};

export default AlertBar;
