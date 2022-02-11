import { useEffect, useState } from "react";
import { Textarea, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";

interface OtherProps {
  label?: string;
  isTextArea?: boolean;
}

const MyInput = ({
  isTextArea = false,
  label = "",
  ...props
}: OtherProps & FieldHookConfig<string> & React.HTMLAttributes<{}>) => {
  const [field, meta] = useField(props);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (meta.touched && meta.error) setIsInvalid(true);
    else setIsInvalid(false);
  }, [meta]);

  return (
    <FormControl isInvalid={isInvalid}>
      {label && (
        <FormLabel htmlFor={props.id || props.name} paddingTop="0.5rem">
          {label}
        </FormLabel>
      )}
      {!isTextArea && (
        <Input
          {...field}
          placeholder={props.placeholder}
          type={props.type}
          style={props.style}
          width="100%"
          bgColor="white"
        />
      )}
      {isTextArea && <Textarea {...field} placeholder={props.placeholder} />}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default MyInput;
