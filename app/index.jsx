import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    // Após 5 segundos, redirecionar para a próxima tela
    const timeout = setTimeout(() => {
      router.push('/main'); // tela que irá ser redirecionado 
    }, 5000);

    return () => clearTimeout(timeout); // Limpar timeout após a realização da ação
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.title}>Amigo Vacinado</Text>
    </View>
  );
}

// CSS Parte da estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)', // Cor de fundo mais suave e moderna
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Padding extra para que os elementos não fiquem muito próximos das bordas
  },
  logo: {
    width: 250,
    height: 150,
    borderRadius: 20,
    marginBottom: 30, // Mais espaço abaixo da logo
    borderWidth: 3, // Borda para destacar a logo
    borderColor: '#172477', // Cor da borda para combinar com o tema
    shadowColor: '#000', // Efeito de sombra suave
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 45,
    color: '#172477', // Cor de texto mais forte
    textAlign: 'center',
    fontWeight: '700', // Font-weight mais leve para sofisticação
    marginBottom: 30, // Mais espaço entre o título e o conteúdo abaixo
    textShadowColor: '#aaa', // Sombra suave no título para efeito de destaque
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
