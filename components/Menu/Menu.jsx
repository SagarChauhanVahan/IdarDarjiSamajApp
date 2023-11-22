import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../constants/fonts';

function Menu({collapseMenu, theme}) {
  return (
   <>
        <ImageBackground source={require('../../static/images/human.png')} resizeMode='cover' style={styles.profileImage}>
            <TouchableOpacity onPress={()=>collapseMenu()}>
            <Image source={require('../../static/images/cross.png')} resizeMode='contain' style={styles.crossIcon} />
            </TouchableOpacity>
        </ImageBackground>
        <View style={[styles.menuContainer,{backgroundColor: theme?.menuBackground}]}>
            <Text style={[styles.headerText, {color: theme?.fontColor, marginTop: 20}]}>Sagar Ashwin Chauhan</Text>
            <Text style={[styles.headerText, {color: theme?.fontColor}]}>Bhajpura</Text>
        </View>
   </>
  )
}

const styles = StyleSheet.create({
    profileImage: {
        height: 300,
        width: '100%'
      },
      crossIcon: {
        height: 18,
        width: 18,
        marginTop: 20,
        alignSelf: 'flex-end',
        marginRight: 20
      },
      menuContainer: {
        flex: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -20
      },
      headerText: {
        fontFamily: fonts.Outfit500,
        fontSize: 20,
        textAlign: 'center'
      }
});

export default Menu
