import React from "react";
import OverheadCalculator from "./features/overheadCalculator/OverheadCalculator";
import { Flex } from "@chakra-ui/react";

function Layout() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <OverheadCalculator />
    </Flex>
  );
}

export default Layout;
