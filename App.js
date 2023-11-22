/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Router from './router';
import { useDispatch } from 'react-redux';
import { setApplicationTheme } from './redux/actions/ConfigActions';
import { darkTheme, lightTheme } from './constants/theme';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApplicationTheme(lightTheme));
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
