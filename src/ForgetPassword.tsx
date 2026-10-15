import React from 'react';

import {

  Pressable,

  SafeAreaView,

  StyleSheet,

  Text,

  TextInput,

  View,

} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {

  phone: string;

  setPhone: (value: string) => void;

  onBack: () => void;

  onNext: () => void;

};
