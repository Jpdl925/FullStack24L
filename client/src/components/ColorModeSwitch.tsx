import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import {MoonIcon, SunIcon} from "@chakra-ui/icons"

const ColorModeSwitch = () => {
    
    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <>
    <HStack justifyContent={'end'}>
       
        { colorMode === 'dark' ? <Text whiteSpace={'nowrap'} m={3}><MoonIcon onClick={toggleColorMode}/> Dark</Text> : <Text whiteSpace={'nowrap'} m={3}><SunIcon onClick={toggleColorMode}/> Light</Text>}
    </HStack>
    </>
  )
}

export default ColorModeSwitch