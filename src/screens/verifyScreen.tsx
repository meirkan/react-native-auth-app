import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';

export default function VerifyScreen() {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);
  };

  const verifyCode = () => {
    const enteredCode = code.join('');

    if (enteredCode.length !== 4) {
      Alert.alert('Қате', '4 таңбалы кодты толық енгізіңіз');
      return;
    }

    Alert.alert('Сәтті', 'Код дұрыс енгізілді!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Кодты растау</Text>

        <Text style={styles.subtitle}>
          Телефоныңызға жіберілген 4 таңбалы кодты енгізіңіз
        </Text>

        <View style={styles.codeContainer}>
          {code.map((item, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={item}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <Pressable style={styles.button} onPress={verifyCode}>
          <Text style={styles.buttonText}>Растау</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.resend}>Кодты қайта жіберу</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 80,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    lineHeight: 22,
    marginBottom: 35,
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    fontSize: 24,
    fontWeight: '600',
  },

  button: {
    height: 55,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },

  resend: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 22,
    fontSize: 16,
  },
});