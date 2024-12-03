import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />

      <Text style={styles.title}>Amigo Vacinado</Text>

      <Link asChild href='/entrar'>
        <Button mode='contained' style={styles.btn}>Entrar</Button>
      </Link>

      <Link asChild href='/cadastrar'>
        <Button mode='contained' style={styles.btn}>Cadastrar-se</Button>
      </Link>

      <Link asChild href='/cadastroPet'>
        <Button mode='contained' style={styles.btn}>Cadastrar Pet</Button>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

// CSS Parte da estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)', // Cor de fundo mais clara
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Adicionando espaço nas laterais
  },

  logo: {
    width: 250,
    height: 150,
    borderRadius: 20,
    marginBottom: 30, // Diminui o espaço inferior para balancear
    borderWidth: 3,
    borderColor: '#172477', // Cor de borda para o logo
  },

  title: {
    fontSize: 40,
    color: '#172477',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20, // Mais espaço entre o título e os botões
  },

  btn: {
    width: 250,
    height: 50,
    marginVertical: 10, // Mais espaço entre os botões
    backgroundColor: '#172477',
    borderRadius: 8,
    justifyContent: 'center',
    fontWeight: 'bold',
    elevation: 3, // Adiciona sombra suave
    shadowColor: '#000', // Sombra
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  btnText: {
    color: '#fff', // Cor do texto dos botões
    fontWeight: 'bold',
  },
});
