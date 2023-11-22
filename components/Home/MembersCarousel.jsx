import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../constants/fonts';

function MembersCarousel({theme}) {
  return (
    <View style={styles.membersContainer}>
        <Text style={[styles.membersText,{color: theme?.fontColor}]}>Members</Text>

        <FlatList
        data={[{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},{item: 1}]} 
        keyExtractor={(item, index) => index }
        snapToInterval={190}
        decelerationRate={'fast'}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => (
            <View style={[styles.singleMember,{backgroundColor: theme?.cardBackgroundColor}]}>
                <Image source={require('../../static/images/human.png')} resizeMode='cover' style={styles.humanImage} />
                <Text style={[styles.memberName,{color: theme?.fontColor}]}>Sagar Chauhan</Text>
            </View>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    membersContainer: {
        marginHorizontal: 20,
        marginTop: 40
    },
    membersText: {
        fontFamily: fonts.Outfit500,
        fontSize: 19
    },
    singleMember: {
        height: 150,
        width: 180,
        borderRadius: 12,
        marginTop: 10,
        marginRight: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    humanImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    memberName: {
        fontFamily: fonts.Outfit400,
        fontSize: 18,
        marginTop: 4,
        flex: 0.3,
    }
});

export default MembersCarousel
