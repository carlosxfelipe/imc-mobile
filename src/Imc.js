import React, {useState} from 'react';

import {
  Container,
  Content,
  Title,
  Label,
  OutputLabel,
  TextInput,
  Button,
  Footer,
} from './styles';

const Imc = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcular = () => {
    setImc(parseFloat(peso / altura ** 2).toFixed(2));
  };

  const classificacao = () => {
    const imcFloat = parseFloat(imc);

    if (imcFloat < 18.5) {
      return 'abaixo do peso';
    } else if (imcFloat >= 18.5 && imcFloat < 25) {
      return 'peso ideal';
    } else if (imcFloat >= 25 && imcFloat < 30) {
      return 'sobrepeso';
    } else if (imcFloat >= 30 && imcFloat < 35) {
      return 'obesidade grau 1';
    } else if (imcFloat >= 35 && imcFloat < 40) {
      return 'obesidade grau 2 (severa)';
    } else if (imcFloat >= 40) {
      return 'obesidade grau 3 (mórbida)';
    } else {
      return 'entrada inválida';
    }
  };

  return (
    <Container>
      <Content>
        <Title>Calculadora de IMC</Title>

        <Label>Peso</Label>
        <TextInput
          placeholder="kg"
          value={peso}
          onChangeText={text => setPeso(text)}
        />

        <Label>Altura</Label>
        <TextInput
          placeholder="metros"
          value={altura}
          onChangeText={text => setAltura(text.replace(',', '.'))}
        />
        <Button
          disabled={altura === '' || peso === ''}
          onPress={() => calcular()}
          title="Calcular"
        />
        {imc && (
          <OutputLabel>
            {'O seu IMC é '}
            {imc}
            {', portanto '}
            {classificacao()}
          </OutputLabel>
        )}
      </Content>
      <Footer>{'Carlos Felipe Araújo 2022'}</Footer>
    </Container>
  );
};

export default Imc;
