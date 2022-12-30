import { Button, HStack } from "@chakra-ui/react";
import { InfoIcon, WarningTwoIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <HStack py={2}>
      <Button>
        <InfoIcon mr={2} />
        test
      </Button>
      <Button>
        <WarningTwoIcon mr={2} /> attempt
      </Button>
    </HStack>
  );
};

export default Footer;
