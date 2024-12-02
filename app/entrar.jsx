import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function App() {
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        style={styles.entradaTexto}
        activeUnderlineColor="black"
      />

      <TextInput
        autoCapitalize="none"
        secureTextEntry={!showPassword} // Alterna entre mostrar e esconder senha
        keyboardType="numeric"
        maxLength={4}
        label="Senha"
        style={styles.entradaTexto}
        activeUnderlineColor="black"
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'} // Alterna o ícone
            onPress={() => setShowPassword(!showPassword)} // Altera o estado
          />
        }
      />

      <Button mode="contained" style={styles.btnEntrar}>
        Entrar
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

//CSS Parte da estilização

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(194, 125, 79)",
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 50,
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '800',
  },

  entradaTexto: {
    width: 350,
    backgroundColor: "#eee7e8",
    margin: 10,
    padding: 5,
  },

  btnEntrar: {
    width: 200,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 100,
    color: "#fffff",
    backgroundColor: "#172477",
    fontWeight: 'bold',
  },
});
