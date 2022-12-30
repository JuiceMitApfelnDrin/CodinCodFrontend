import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";

import { EditorContext } from "providers/EditorProvider";
import ProblemStatement from "./partials/ProblemStatement";

const Main = () => {
  const monaco = useMonaco();
  const editorContext = useContext(EditorContext);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  // TODO: make problemstatement and grid and editor all resizable, so users can adjust it to their needs :)
  return (
    <>
      <HStack h="full" w="full" position="relative">
        <VStack h="full" background="gray.900" flexBasis={"start"}>
          {isSidePanelOpen && (
            <ProblemStatement onClose={() => setIsSidePanelOpen(false)} />
          )}
          {!isSidePanelOpen && (
            <Button
              padding={0}
              backgroundColor="cyan.600"
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
            >
              <ArrowRightIcon />
            </Button>
          )}
        </VStack>
        <VStack flexGrow={1} h="full">
          <Editor
            height="100%"
            defaultLanguage={editorContext.language || "javascript"}
            language={editorContext.language}
            theme="vs-dark"
          />

          {/* TODO:
          this should become a component that is scrollable
          so you can scroll through your output items if there are more than 1
          */}
          <Grid w="full" templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem w="100%" bg="blue.500">
              Output
            </GridItem>
            <GridItem w="100%" bg="blue.500">
              Expected
            </GridItem>
            <GridItem w="100%" h="10" bg="blue.800">
              hey
            </GridItem>
            <GridItem w="100%" h="10" bg="blue.800">
              there
            </GridItem>
          </Grid>
        </VStack>
      </HStack>
    </>
  );
};

export default Main;
