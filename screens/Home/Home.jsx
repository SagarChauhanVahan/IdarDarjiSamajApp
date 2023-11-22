import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import { fonts } from '../../constants/fonts';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { MAX_HEIGHT } from '../../constants/dimensions';
import HomeWelcomeSection from '../../components/Home/HomeWelcomeSection';
import { getTileIcons } from '../../utils/utility';
import TileSection from '../../components/Home/TileSection';
import MembersCarousel from '../../components/Home/MembersCarousel';
import Menu from '../../components/Menu/Menu';

function HomeScreen() {
  const storeDetails = useSelector((data)=>data.appConfig);
  const theme = storeDetails.theme;
  const hamburgerIcon = theme?.themeName === 'light' ? require('../../static/images/light-theme-hamburger.png'):require('../../static/images/dark-theme-hamburger.png');
  const menuPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    collapseMenu();
  }, []);

  const expandMenu = () => {
    Animated.timing(menuPosition, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const collapseMenu = () => {
    Animated.timing(menuPosition, {
      toValue: -600,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }
  
  
  return (
    <>

    <View style={[styles.container,{backgroundColor: theme?.screenBackgroundColor}]}>
      <View style={[styles.homeHeaderSection,{backgroundColor: theme?.cardBackgroundColor}]}>
        <View style={[styles.introSection]}>
          <Image source={require('../../static/images/hero-image.png')} style={styles.heroImg} resizeMode='contain' />
          <Text style={[styles.nameText,{color:theme?.fontColor}]}>Hi, Sagar Chauhan</Text>
        </View>
        <TouchableOpacity onPress={()=>expandMenu()}>
          <Image source={hamburgerIcon} resizeMode='contain' style={styles.hamburger} />
        </TouchableOpacity>
      </View>

      <HomeWelcomeSection theme={theme}/>

      <TileSection theme={theme}/>

      <MembersCarousel theme={theme} />
    </View>

    <Animated.View style={[styles.menuLayer,{right: menuPosition},{backgroundColor: theme?.screenBackgroundColor}]}>
      <Menu collapseMenu={collapseMenu} theme={theme}/>
    </Animated.View>
    
    </>
    
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  homeHeaderSection: {
    height: MAX_HEIGHT*0.23,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: 24,
  },
  introSection: {
    flexDirection: 'row',
  },
  heroImg: {
    height: 42,
    width: 42,
    borderRadius: 42/2,
  },
  nameText: {
    fontFamily: fonts.Outfit400,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 8
  },
  hamburger: {
    height: 28,
    width: 28,
    marginTop: 8
  },
  menuLayer: {
    zIndex: 2,
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  }
})

export default HomeScreen;
