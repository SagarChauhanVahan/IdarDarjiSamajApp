import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../constants/fonts';
import { useSelector } from 'react-redux';
import { getTileIcons } from '../../utils/utility';

function TileSection({theme}) {
    const [tileDetails, setTileDetails] = useState([]);

  useEffect(() => {
    if (theme?.themeName) {
      setTileDetails(getTileIcons(theme?.themeName));
    }
  }, [theme])
  
  return (
    <View style={styles.tileSection}>
        {
          tileDetails.map((item, index) => {
            return (
              <TouchableOpacity key={item.title} style={[styles.singleTile,{backgroundColor:theme?.cardBackgroundColor},Platform.OS==='ios' ? styles.iosBoxShadow: styles.androidElevation]}>
                <Image source={item.source} resizeMode='contain' style={styles.tileIconSize} />
                <Text style={[styles.tileText,{color: theme?.fontColor}]}>{item.title}</Text>
              </TouchableOpacity>
            )
          })
        }
    </View>
  )
}

const styles = StyleSheet.create({
    tileSection: {
        marginHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 24,
      },
      singleTile: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: '45%',
        marginTop: 16
      },
      tileText: {
        fontFamily: fonts.Outfit400,
        fontSize: 18,
        marginTop: 12
      },
      tileIconSize: {
        height: 38,
        width: 38
      },
      androidElevation: {
        elevation: 8,
      },
      iosBoxShadow: {
        shadowColor: '#00000026',
        shadowOffset: {width: 7, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 3,
      }
});

export default TileSection
