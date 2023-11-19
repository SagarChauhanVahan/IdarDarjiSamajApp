import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { fonts } from '../../constants/fonts';

function ScreenHeader({title, onBackPress}) {
    const storeDetails = useSelector((data)=>data.appConfig);
    const theme = storeDetails.theme;
    const backIcon = theme?.themeName === 'light' ? require('../../static/images/light-theme-back-icon.png'):require('../../static/images/dark-theme-back-icon.png');

    const getBackIcon = () => {
        if(theme.themeName === 'light') {
            return require('../../static/images/light-theme-back-icon.png');
        } else {
            return require('../../static/images/light-theme-back-icon.png')
        }
    }

  return (
    <View style={[styles.headerContainer,{backgroundColor:theme?.screenBackgroundColor}]}>
        <TouchableOpacity>
            <Image source={backIcon} resizeMode='contain' style={styles.backIconStyle} />
        </TouchableOpacity>
        <Text style={[styles.titleText,{color: theme?.fontColor}]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    backIconStyle: {
        height: 22,
        width: 32
    },
    titleText: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: fonts.Outfit500
    }
})

export default ScreenHeader
