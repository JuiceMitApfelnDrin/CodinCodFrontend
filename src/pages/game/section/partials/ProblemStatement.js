import { Box, CloseButton, Heading, Text } from "@chakra-ui/react";

import { EditorContext } from "providers/EditorProvider";
import { useContext } from "react";

const ProblemStatement = ({ onClose }) => {
  const editorContext = useContext(EditorContext);

  return (
    <>
      <Box width="full">
        <CloseButton onClick={onClose} ml="auto" />
      </Box>
      <Heading size="md">{editorContext?.puzzle.title}</Heading>
      <Text h="full">{editorContext?.puzzle.statement}</Text>
    </>
  );
};

export default ProblemStatement;
