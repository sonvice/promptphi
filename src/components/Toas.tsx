

import { useToast, Button, ChakraProvider,extendTheme } from '@chakra-ui/react'
import { FiCopy } from "react-icons/fi";
import { hydrate } from 'react-dom'


// Crear un tema personalizado sin estilos por defecto
const customTheme = extendTheme({
  styles: {
    global: {
      paddingX:'px-space-xs'
    },
  },
});


export default function Toast() {
  const toast = useToast()
  return (
  <ChakraProvider resetCSS={false} disableGlobalStyle={true} theme={customTheme}>
    <Button px={2} bgColor={'transparent'} color={'white'}   _hover={{
    background: "white",
    color: "hsl(0, 0%, 5%)",
  }} className='copy-btn'
    onClick={() =>
        toast({
          title: 'Contenido Copiado',
          //description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
      >
     <FiCopy /> 
    </Button>
        </ChakraProvider>
  )
}
