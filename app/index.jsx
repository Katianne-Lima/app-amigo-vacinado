import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    // Após 5 segundos, redirecionar para a próxima tela
    const timeout = setTimeout(() => {
      router.push('/main'); // tela que ira ser redirecionado 
    }, 5000);

    return () => clearTimeout(timeout); // Limpar timeout apos a realização da ação
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.title}>Amigo Vacinado</Text>
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
  logo: {
    width: 320,
    height: 200,
    borderRadius: 50,
    margin: 15,
  },
  title: {
    fontSize: 50,
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '800',
    margin: 15,
  },
});
