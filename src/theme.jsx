import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: 'gray.900',
          color: 'white',
        },
        a: {
            textDecoration: 'none'
        },
        li: {
            listStyle: 'none',
            margin: '0px 35px 0px 0px'
        }
      },
    },
  })

  export default theme