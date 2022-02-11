import { useMutation } from "@apollo/client";
import { Link } from "@chakra-ui/react";
import Router from "next/router";
import { SIGN_OUT } from "operations/mutations";

const SignOut = () => {
  const [signOut] = useMutation(SIGN_OUT);

  const onClick = async () => {
    const { data } = await signOut();
    if (data.endSession) Router.reload();
  };

  return (
    <Link onClick={onClick} fontWeight="bold">
      Log Out
    </Link>
  );
};

export default SignOut;
