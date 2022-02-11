import { Heading, As } from "@chakra-ui/react";

type Props = {
  size?: string;
  children: React.ReactNode;
};

type Dimensions = {
  as: As;
  size: string;
};

const Title = ({ size = "medium", children, ...props }: Props & React.HTMLAttributes<{}>) => {
  let dimensions = {} as Dimensions;

  switch (size) {
    case "small":
      dimensions.as = "h3";
      dimensions.size = "sm";
      break;
    case "medium":
      dimensions.as = "h2";
      dimensions.size = "md";
      break;
    case "large":
      dimensions.as = "h1";
      dimensions.size = "lg";
      break;
    default:
      dimensions.as = "h4";
      dimensions.size = "md";
      break;
  }
  return (
    <Heading as={dimensions.as} size={dimensions.size} paddingBlock="0.5rem" {...props}>
      {children}
    </Heading>
  );
};

export default Title;
