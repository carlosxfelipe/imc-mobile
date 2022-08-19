import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  padding: 16px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: black;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 24px;
  color: black;
  margin-bottom: 4px;
`;

export const OutputLabel = styled.Text`
  font-size: 24px;
  color: black;
  margin-top: 16px;
`;

export const TextInput = styled.TextInput.attrs({
  keyboardType: 'decimal-pad',
})`
  border-color: #dddddd;
  border-width: 1px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Button = styled.Button.attrs({
  color: 'black',
})``;

export const Footer = styled.Text`
  color: black;
  text-align: center;
`;
