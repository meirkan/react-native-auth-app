import React, { useState } from 'react';

import {

  Pressable,

  SafeAreaView,

  StyleSheet,

  Text,

  TextInput,

  View,

  Alert,

} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {

  phone: string;

  setPhone: (value: string) => void;

  password: string;

  setPassword: (value: string) => void;

  onForgot: () => void;}