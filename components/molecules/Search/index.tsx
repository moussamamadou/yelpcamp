import { Box, Flex, Input } from "@chakra-ui/react";
import Button from "components/atoms/Button";
import Router from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) Router.push(`/search/${value}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Flex gap="1rem" paddingBlock="1rem">
          <Box>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="Search for camps"
              name="search"
              maxWidth="250px"
              bgColor="white"
            />
          </Box>
          <Box>
            <Button type="submit">Search</Button>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default Search;
