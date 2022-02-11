import { Box, Text } from "@chakra-ui/react";
import Button from "components/atoms/Button";
import Router from "next/router";

type Props = {
  page: number;
  perPage: number;
  count: number;
  url?: string;
};

export default function Pagination({ page, perPage, count, url = "" }: Props) {
  const pageCount = Math.ceil(count / perPage);
  return (
    <>
      <Box paddingBlock="2rem" align="center">
        {page > 1 && (
          <Button
            colorScheme="white"
            onClick={() => Router.push(`${Router.asPath.replace(/\?page=[0-9]*/, "")}?page=${page - 1}`)}
            style={{ marginRight: "1rem" }}
          >
            <a>← Prev</a>
          </Button>
        )}
        {pageCount ? `Page ${page} of ${pageCount}` : null}
        {page < pageCount && (
          <Button
            colorScheme="white"
            onClick={() => Router.push(`${Router.asPath.replace(/\?page=[0-9]*/, "")}?page=${page + 1}`)}
            style={{ marginLeft: "1rem" }}
          >
            <a>Next →</a>
          </Button>
        )}{" "}
      </Box>
      <Text align="center">
        {count} Item{count > 1 ? "s" : null} Total
      </Text>
    </>
  );
}
