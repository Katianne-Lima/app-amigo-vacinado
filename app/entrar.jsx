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

      {/* Campo de Email */}
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        style={styles.input}
        activeUnderlineColor="#172477"
      />

      {/* Campo de Senha */}
      <TextInput
        autoCapitalize="none"
        secureTextEntry={!showPassword} // Alterna entre mostrar e esconder senha
        keyboardType="numeric"
        maxLength={4}
        label="Senha"
        style={styles.input}
        activeUnderlineColor="#172477"
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'} // Alterna o ícone
            onPress={() => setShowPassword(!showPassword)} // Altera o estado
          />
        }
      />

      {/* Botão de Entrar */}
      <Button mode="contained" style={styles.btnEntrar}>
        Entrar
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos aprimorados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Fundo claro e neutro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Adicionado padding para dar mais espaço
  },

  title: {
    fontSize: 40,
    color: '#172477', // Cor mais escura para o título
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 40, // Mais espaço entre o título e o formulário
  },

  input: {
    width: '100%', // Adapta os inputs ao tamanho da tela
    backgroundColor: '#ffffff', // Fundo branco para os inputs
    marginBottom: 15,
    borderRadius: 8,
    paddingLeft: 10, // Mais padding para os campos de texto
  },

  btnEntrar: {
    width: '80%',
    height: 50,
    backgroundColor: '#172477', // Cor do botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Bordas arredondadas no botão
    marginTop: 20,
  },
});
