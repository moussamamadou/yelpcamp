import React from "react";
import { Alert, AlertIcon, AlertDescription, CloseButton } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const MyAlert = ({ children }: Props) => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{children}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    </>
  );
};

export default MyAlert;
