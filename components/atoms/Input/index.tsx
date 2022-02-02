import { useEffect, useState } from "react";
import { Textarea, Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useField, FieldHookConfig } from "formik";

interface OtherProps {
  label?: string;
  isTextArea?: boolean;
}

const MyInput = ({ isTextArea = false, label = "", ...props }: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (meta.touched && meta.error) setIsInvalid(true);
    else setIsInvalid(false);
  }, [meta]);

  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>}
      {!isTextArea && <Input {...field} placeholder={props.placeholder} type={props.type} />}
      {isTextArea && <Textarea {...field} placeholder={props.placeholder} />}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default MyInput;
