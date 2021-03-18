import React, { useCallback } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { PlusCircle } from 'react-feather'

import { RootStackParamList } from '~/App'
import {
  ContainerGradient,
  Title,
  Card,
  CardTitle,
} from './styles'

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const handleAddPet = useCallback(() => {
    navigation.navigate('AddPet')
  }, [])

  return (
    <ContainerGradient>
      <Title>PetZera</Title>
      <Card onPress={handleAddPet}>
        <CardTitle>Adicionar Pet</CardTitle>
        <PlusCircle color="#0093E9" />
      </Card>
    </ContainerGradient>
  )
}

export default Home
