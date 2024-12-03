import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function App() {
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>

      {/* Campo de Nome */}
      <TextInput
        autoCapitalize="words"
        label="Nome"
        style={styles.input}
        activeUnderlineColor="#172477"
      />

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
        label="Senha"
        style={styles.input}
        activeUnderlineColor="#172477"
        maxLength={20}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'} // Alterna o ícone
            onPress={() => setShowPassword(!showPassword)} // Altera o estado
          />
        }
      />

      {/* Botão de Cadastro */}
      <Button mode="contained" style={styles.btnCadastrar}>
        Cadastrar-se
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
    padding: 20,
  },

  title: {
    fontSize: 40,
    color: '#172477', // Cor escura para o título
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 30, // Maior espaçamento entre o título e os campos
  },

  input: {
    width: '100%', // Adapta os inputs ao tamanho da tela
    backgroundColor: '#ffffff', // Fundo branco para os campos
    marginBottom: 15,
    borderRadius: 8,
    paddingLeft: 10, // Padding interno mais confortável
  },

  btnCadastrar: {
    width: '80%',
    height: 50,
    backgroundColor: '#172477', // Cor do botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Bordas arredondadas no botão
    marginTop: 20,
  },
});
