import React, { useState } from 'react'
import { GitHub } from 'react-feather'
import { Text } from 'react-native'

import Input from '~/components/Input'
import { Container, FormContainer } from './styles'

const AddPet = () => {
  const [ petName, setPetName ] = useState<string>('')

  return (
    <Container>
      <FormContainer>
        <Input
          label="Nome do iti malia meu deusu"
          icon={<GitHub color="#333" />}
          onChangeText={setPetName}
        />
        <Text>{ petName }</Text>
      </FormContainer>
    </Container>
  )
}

export default AddPet
