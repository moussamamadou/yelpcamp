import { useMutation } from "@apollo/client";
import Button from "components/atoms/Button";
import Router from "next/router";
import { SIGN_OUT } from "operations/mutations";

const SignOut = () => {
  const [signOut] = useMutation(SIGN_OUT);

  const onClick = async () => {
    const { data } = await signOut();
    if (data.endSession) Router.reload();
  };

  return <Button onClick={onClick}> Sign Out</Button>;
};

export default SignOut;
