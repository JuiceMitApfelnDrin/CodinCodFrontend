import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header/Header";
import { VStack } from "@chakra-ui/react";

const GeneralLayout = ({ children, spacing, mx = 1 }) => (
  <Container height="100vh">
    <Header />
    <VStack flex={1} p={1} width="full" spacing={spacing} mx={mx}>
      {children}
    </VStack>
  </Container>
);

export default GeneralLayout;
