import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

function HomeScreen() {
  const storeDetails = useSelector((data)=>data.appConfig);
  const theme = storeDetails.theme;

  return (
    <View style={[styles.container,{backgroundColor: theme?.screenBackgroundColor}]}>
        <Text>This is my home page</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default HomeScreen;
