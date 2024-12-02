import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>



      <Image style={styles.logo} source={require('../assets/Logo.png')}/>

      <Text style={styles.title}>Amigo Vacinado</Text>

      <Link asChild href='/entrar'><Button mode='contained' style={styles.btnEntrar}>Entrar</Button></Link>
      <StatusBar style="auto" />

      <Link asChild href='/cadastrar'><Button mode='contained' style={styles.btnEntrar}>Cadastrar-se</Button></Link>

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
    alignItems: 'center'
  },

  logo:{
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

  btnEntrar: {
    width: 200,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    color: "#fffff",
    backgroundColor: "#172477",
    fontWeight: 'bold'
  },
});
