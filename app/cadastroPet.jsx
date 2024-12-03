import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const CadastroPet = () => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({ nome, especie, raca, dataNascimento });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Pet</Text>

      <View style={styles.formContainer}>
        {/* Campo Nome */}
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          activeUnderlineColor="black"
        />

        {/* Campo Espécie */}
        <TextInput
          label="Espécie"
          value={especie}
          onChangeText={setEspecie}
          style={styles.input}
          activeUnderlineColor="black"
        />

        {/* Campo Raça */}
        <TextInput
          label="Raça"
          value={raca}
          onChangeText={setRaca}
          style={styles.input}
          activeUnderlineColor="black"
        />

        {/* Campo Data de Nascimento (com formato de texto) */}
        <TextInput
          label="Data de Nascimento"
          value={dataNascimento}
          onChangeText={setDataNascimento}
          style={styles.input}
          keyboardType="numeric"
          placeholder="DD/MM/AAAA"
          activeUnderlineColor="black"
        />

        {/* Botão para Enviar Formulário */}
        <Button
          mode="contained"
          style={styles.btnPetCadastro}
          onPress={handleSubmit}
        >
          Cadastrar Pet
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default CadastroPet;

// Estilos aprimorados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)', // Cor de fundo mais suave
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 40,
    color: '#172477',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  formContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },

  btnPetCadastro: {
    backgroundColor: '#172477',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
});
