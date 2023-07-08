import { Button, Card, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function OverheadCalculator() {
  const [totalCost, setTotalCost] = useState("");
  const [indirectRate, setIndirectRate] = useState("");
  const [baseCost, setBaseCost] = useState("");
  const [answer, setAnswer] = useState({ value: "", output: "" });

  return (
    <Card h="30vh" w="30vw" padding="10px">
      <Flex flexDirection={"column"}>
        <Input
          margin="10px"
          placeholder="total cost"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />
        <Input
          margin="10px"
          placeholder="indirect rate"
          value={indirectRate}
          onChange={(e) => setIndirectRate(e.target.value)}
        />
        <Input
          margin="10px"
          placeholder="base cost"
          value={baseCost}
          onChange={(e) => setBaseCost(e.target.value)}
        />
        <Button
          onClick={() => {
            const result = calculateOutput(totalCost, indirectRate, baseCost);
            setAnswer({ value: result[0], output: result[1] });
          }}
        >
          submit
        </Button>
      </Flex>
      <Text>{answer.value}</Text>
      <Text>{answer.output}</Text>
    </Card>
  );
}

const calculateOutput = (
  totalCost: string,
  indirectRate: string,
  baseCost: string
) => {
  const ir = parseInt(indirectRate) * 0.01;
  const bc = parseInt(baseCost);
  const tc = parseInt(totalCost);
  let value: string = "";
  let answer: string = "";
  if (tc && ir && bc) {
    answer = "Can't fill all three fields";
  } else if (tc && ir) {
    value = "base cost";
    answer = (tc * (1 - ir)).toFixed(2);
  } else if (tc && bc) {
    value = "indirect rate";
    answer = (1 - bc / tc).toFixed(2);
  } else if (ir && bc) {
    value = "total cost";
    answer = (bc / (1 - ir)).toFixed(2);
  }
  return [value, `${answer}`];
};

export default OverheadCalculator;
