import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  isLoading?: boolean;
  colorScheme?: string;
};

const MyButton = ({
  colorScheme = "black",
  leftIcon,
  isLoading = false,
  children,
  ...props
}: Props & React.ButtonHTMLAttributes<{}>) => {
  let backgroundColor = "black";
  let color = "white";
  if (colorScheme !== "black") {
    backgroundColor = colorScheme;
    color = "black";
  }
  return (
    <Button
      variant="solid"
      border="1px solid lightgray"
      isLoading={isLoading}
      leftIcon={leftIcon && leftIcon}
      backgroundColor={backgroundColor}
      color={color}
      _hover={{ backgroundColor: backgroundColor, filter: "brightness(90%)" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
