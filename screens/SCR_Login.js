import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../estilos/MainStyle';

export default function SCR_Login({navigation}) {
  const [CONL_Usuario, CONL_Set_Usuario] = useState(null)
  const [CONL_Senha, CONL_Set_Senha] = useState(null)

  const CONL_Saida_Veiculos = () => {
    navigation.reset(
        {
            index: 0
            , routes: [{name: "Principal"}]
        }
    )
  }

  const CONG_LogIn = () => {
    console.log("Saída")
    console.log(CONL_Usuario)
    console.log(CONL_Senha)
  }

  return (
    <View style={[styles.container, CONG_Estilo_Especifico.CONG_Especifico_Container]}>
      <Text h3>Sempre - 11</Text>
      <Input
        placeholder="Usuário"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText={value => CONL_Set_Usuario(value)}
        keyboardType="default"
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={value => CONL_Set_Senha(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Saída de Veículos"
        onPress={() => CONL_Saida_Veiculos()}
      />
    </View>
  );
}

const CONG_Estilo_Especifico = StyleSheet.create(
  {
    CONG_Especifico_Container: {
      backgroundColor: "#def"
    }
  }
)

