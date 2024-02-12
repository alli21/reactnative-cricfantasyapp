import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, } from 'react-native';
import { colors, scale, scaleFont, verticalScale, constants } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import LinearGradient from 'react-native-linear-gradient';


const CustomDrawerContent = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    height: verticalScale(80),
                    alignSelf: 'center',
                }}>
                <View style={{ width: scale(280), marginTop: verticalScale(35), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center' }}>
                    <Image source={require("../../assets/images/avatar1.jpeg")} style={{ width: verticalScale(40), height: verticalScale(40), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                    <View style={{ marginLeft: scale(10) }} >
                        <Text style={{ color: colors.white, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }} >Daya Chitanis</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Icon name="star-circle-outline" color={'#FFFF2E'} size={verticalScale(20)} />
                            <Text style={{ color: colors.white, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }} > Level 22</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <View style={{ marginHorizontal: scale(15), marginTop: verticalScale(10) }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("MyProfile")
                    setTimeout(() => { props.navigation.closeDrawer() }, 500)
                }} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Icon name="account-outline" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Refer")
                    setTimeout(() => { props.navigation.closeDrawer() }, 500)
                }} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Octicons name="share-android" color={colors.primary_blue} size={verticalScale(16)} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(240) }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(25) }}>Refer & Earn</Text>
                        <View style={{ backgroundColor: '#44DF5D', justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(3), paddingHorizontal: scale(4) }}>
                            <Text style={{ color: colors.white, fontSize: scaleFont(11), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Earn Rs. 100</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('FollowUsScreen')} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Icon name="account-plus-outline" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>Follow Us</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => props.navigation.navigate('LiveChatScreen')} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Ionicon name="chatbox-ellipses-outline" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>Live Chat</Text>
                </TouchableOpacity> */}


                <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Ionicon name="settings-outline" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>Settings</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Support')} style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <MaterialIcons name="headset-mic" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>Support</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ flexDirection: 'row', width: scale(200), alignItems: 'center', height: verticalScale(55) }}>
                    <Icon name="file-powerpoint-box" color={colors.primary_blue} size={verticalScale(20)} />
                    <Text style={{ color: colors.black, fontSize: scaleFont(15), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>Fantasy Points System</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

export default CustomDrawerContent;