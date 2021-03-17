import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: [ '#80D0C7', '#0093E9' ],
  start: { x: 0, y: 0.25 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`

export const Card = styled.TouchableOpacity`
  background: white;
  padding: 16px 24px;
  border-radius: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.Text`
  color: #0093E9;
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
`
