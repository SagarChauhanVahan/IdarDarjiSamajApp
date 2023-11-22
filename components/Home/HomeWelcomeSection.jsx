import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { fonts } from '../../constants/fonts';

function HomeWelcomeSection({theme}) {

  return (
    <View style={[styles.welcomeSection,{backgroundColor:theme?.cardBackgroundColor},Platform.OS==='ios' ? styles.iosBoxShadow: styles.androidElevation]}>
        <View style={[styles.detailIndicatior,{backgroundColor: theme?.primaryCtaColor}]}>
          <Text style={[styles.detailsText,{color: theme?.cardBackgroundColor}]}>Details</Text>
        </View>
        <Text style={[styles.welcomeText,{color: theme?.fontColor}]}>Welcome to IDS APP</Text>

        <View style={{marginVertical: 10}}>
          <View style={styles.keyVal}>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>Village</Text>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>:</Text>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>Bhajpura</Text>
          </View>
          <View style={styles.keyVal}>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>Members</Text>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>:</Text>
            <Text style={[styles.keyValText,{color: theme?.fontColor}]}>4</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeSection: {
        marginHorizontal: 20,
        borderRadius: 12,
        position: 'relative',
        marginTop: -90
      },
      detailIndicatior: {
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: -12
      },
      detailsText: {
        fontFamily: fonts.Outfit500,
        fontSize: 14,
      },
      welcomeText: {
        fontFamily: fonts.Outfit500,
        fontSize: 20,
        marginTop: 35,
        marginLeft: 20
      },
      keyVal: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
      },
      keyValText: {
        fontFamily: fonts.Outfit400,
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
      },
      androidElevation: {
        elevation: 16,
      },
      iosBoxShadow: {
        shadowColor: '#00000033',
        shadowOffset: {width: 0, height: -6},
        shadowOpacity: 8,
        shadowRadius: 4,
      }
});

export default HomeWelcomeSection
