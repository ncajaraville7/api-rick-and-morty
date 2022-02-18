import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack as='nav' p={4} >
      <Container maxW='85%'>
        <Stack direction={{base: 'column', sm: 'row'}} justify='space-between' align='center'>
          <Link to='/'>
            <Heading>RICK AND MORTY</Heading>
          </Link>
          <Stack as='ul' direction='row'>
            <Box as='li'>
              <Link to='/'>Personajes</Link>
            </Box>
            <Box as='li'>
              <Link to='/favorites'>Favoritos</Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Navbar