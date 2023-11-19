import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { fonts } from '../../constants/fonts';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';

function HomeScreen() {
  const storeDetails = useSelector((data)=>data.appConfig);
  const theme = storeDetails.theme;

  return (
    <View style={[styles.container,{backgroundColor: theme?.screenBackgroundColor}]}>
        <ScreenHeader title={'Home'} />
        <Text style={styles.textStyle}>This is my home page</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  textStyle: {
    fontFamily: fonts.Outfit400,
    fontSize: 24
  }
})

export default HomeScreen;
