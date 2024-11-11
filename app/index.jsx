import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        style={styles.entradaTexto} activeUnderlineColor='black'
      />
      <TextInput
        autoCapitalize="words"
        label="Nome"
        style={styles.entradaTexto} activeUnderlineColor='black' 
      />
      <TextInput
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={4}
        right={<TextInput.Icon icon="eye" />}
        label="Senha"
        style={styles.entradaTexto} activeUnderlineColor='black'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(194, 125, 79)",
    //alignItems: 'center',
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  entradaTexto: {
    backgroundColor: "#eee7e8",
  },
});
