import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

const Paginador = ({ page, setPage, search }) => {

    const next = () => {
        setPage(page + 1)
    }

    const previous = () => {
        setPage(page - 1)
    }

  return (
    <Stack direction='row' justify='center' gap={8} pb={4}>
        { page > 1 && search.length < 1 && <Button backgroundColor='gray.700' _hover={{backgroundColor: 'gray.600'}} onClick={previous}>Anterior</Button>}
        { search.length < 1 && <Button backgroundColor='gray.700' _hover={{backgroundColor: 'gray.600'}} onClick={next}>Siguiente</Button>}
    </Stack>
  )
}

export default Paginador