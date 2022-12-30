import { HStack, Select } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack>
      <div>Header ding</div>
      <Select placeholder="first language">
        <option value="option1">language 1</option>
      </Select>
    </HStack>
  );
};

export default Header;
