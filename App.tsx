import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Alert,
  Text,
  StatusBar,
} from 'react-native';

import Card from './src/components/Card';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(
      'Login Berhasil',
      `Selamat datang ${nama}`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#eef2f5" />

      <Text style={styles.title}>React Native Login</Text>
      <Text style={styles.subtitle}>
        Masuk untuk mengakses aplikasi modern Anda.
      </Text>

      <Card>
        <CustomInput
          label="Nama"
          placeholder="Masukkan nama"
          value={nama}
          onChangeText={setNama}
        />

        <CustomInput
          label="Password"
          placeholder="Masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton title="Login" onPress={handleLogin} />

        <CustomButton
          title="Register"
          variant="secondary"
          onPress={() => Alert.alert('Menu Register')}
        />

        <CustomButton
          title="Delete"
          variant="danger"
          onPress={() => Alert.alert('Data Dihapus')}
        />
      </Card>

      <Text style={styles.footer}>Aman, sederhana, dan siap digunakan.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
    color: '#1f2937',
  },

  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 22,
    lineHeight: 24,
    maxWidth: 320,
  },

  footer: {
    marginTop: 18,
    fontSize: 14,
    color: '#7c83a6',
    textAlign: 'center',
  },
});