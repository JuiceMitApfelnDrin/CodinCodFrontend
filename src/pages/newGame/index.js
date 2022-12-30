import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
} from "@chakra-ui/react";
import { DIFFICULTIES, TYPES } from "utils/constants/puzzle";
import { useEffect, useState } from "react";

import GeneralLayout from "layouts/GeneralLayout";
import axios from "axios";
import supportedLanguages from "api/supportedLanguages";

const labelStyles = {
  mt: "2",
  ml: "-2.5",
  fontSize: "sm",
};

const Index = () => {
  const [sliderValue, setSliderValue] = useState(15);
  const [languages, setLanguages] = useState([]);

  const sendToApiDingPls = () => {
    axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "games/create", {
      testingDing: "hey",
    });
  };

  useEffect(() => {
    supportedLanguages().then(({ data }) => {
      setLanguages(data);
      console.log(data, languages);
    });
  }, []);

  const modes = [
    { value: "Shortest", description: "hey there, looking mighty handsome" },
    { value: "Fastest", description: "hey there, looking mighty handsome" },
    { value: "Reverse", description: "hey there, looking mighty handsome" },
  ];

  return (
    <GeneralLayout spacing="2rem">
      <Container maxW="2xl">
        <Heading
          bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          bgClip="text"
          as="h1"
          size="4xl"
          pt="2rem"
        >
          Host a new game
        </Heading>

        {/* TODO: fix this layout, its ugly */}

        <FormControl>
          <FormLabel color="white">Public game</FormLabel>
          <FormHelperText>
            Public means anyone can join, private you need to share by link.
          </FormHelperText>
          <Switch defaultChecked colorScheme="pink" />
        </FormControl>

        <FormControl>
          <FormLabel color="white">Difficulty</FormLabel>
          <Select color="white">
            {DIFFICULTIES.map((option, index) => (
              <option key={index}>{option.display}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel color="white">Modes</FormLabel>
          {TYPES.map((mode) => (
            <>
              <Checkbox checked={mode.selected} defaultChecked>
                {mode.display}
              </Checkbox>
              <FormHelperText>
                {/* TODO: create a translation file / a way to translate things ding with descriptions (currently only english, but future proofing) */}
                {mode.description ||
                  "hey random description => being worked on KEKW"}
              </FormHelperText>
            </>
          ))}
        </FormControl>

        <FormControl>
          <FormLabel color="white">Time control</FormLabel>
          <Slider
            onChange={(val) => setSliderValue(val)}
            defaultValue={15}
            min={5}
            max={60}
            step={5}
            my="2rem"
          >
            <SliderMark value={5} {...labelStyles}>
              5
            </SliderMark>
            <SliderMark value={15} {...labelStyles}>
              15
            </SliderMark>
            <SliderMark value={30} {...labelStyles}>
              30
            </SliderMark>
            <SliderMark value={45} {...labelStyles}>
              45
            </SliderMark>
            <SliderMark value={60} {...labelStyles}>
              60
            </SliderMark>
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="gray.500"
              borderRadius="full"
              color="white"
              mt="-10"
              ml="-5"
              w="7rem"
            >
              {sliderValue} minutes
            </SliderMark>
            <SliderTrack bg="red.100">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="gray.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </FormControl>

        <FormControl>
          <FormLabel color="white">Programming languages</FormLabel>
          {/* TODO: make this a list of checkboxes instead of this thing, if no option is selected, assume all */}
          <Select color="white">
            {languages
              .map((i) => i.name)
              .sort()
              .map((option, index) => (
                <option key={option + index}>{option}</option>
              ))}
          </Select>
        </FormControl>
        <HStack spacing="2rem" mt={2}>
          <Button type="reset">reset</Button>
          <Button bg="teal" type="submit" onClick={() => sendToApiDingPls()}>
            Host new game
          </Button>
        </HStack>
      </Container>
    </GeneralLayout>
  );
};

export default Index;
