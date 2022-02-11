import { Link } from "@chakra-ui/react";
import { useUser } from "lib/hooks";
import NextLink from "next/link";
import SignOut from "components/molecules/SignOut";

const Navbar = () => {
  const user = useUser();
  return (
    <nav>
      {user ? (
        <>
          <NextLink href="/profile" passHref>
            <Link paddingRight="1rem">{user.name}</Link>
          </NextLink>
          <SignOut />
        </>
      ) : (
        <NextLink href="/signin" passHref>
          <Link>Sign In</Link>
        </NextLink>
      )}
    </nav>
  );
};

export default Navbar;
