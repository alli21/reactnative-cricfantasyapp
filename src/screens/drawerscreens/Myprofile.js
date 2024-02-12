import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { colors, scaleFont, scale, verticalScale, constants } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { showMessage } from "react-native-flash-message";
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";




const MyProfile = (props) => {

    const theme = useSelector(state => state.theme);

    const [moviesTab, setmoviesTab] = useState(true)
    const [seriesTab, setseriesTab] = useState(false)
    const [onswipe, setonswipe] = useState(false)
    const swipeableRef = useRef();

    // const [leftbackground, setleftbackground] = useState(true)




    const deleteitem = (item) => {
        item.close()
        showMessage({
            backgroundColor: colors.primary_red,
            message: "File" + " Deleted",
            type: "info",
        })
    }

    const downloaditem = (item) => {
        item.close()
        showMessage({
            backgroundColor: colors.green,
            message: "Download Started ",
            type: "info",
        })

    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(370),
                    height: verticalScale(250),
                    alignSelf: 'center',
                }}>
                <View style={{ marginTop: verticalScale(40), paddingHorizontal: scale(20), alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: scale(10), width: scale(340) }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={verticalScale(26)}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={verticalScale(26)}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/images/avatar1.jpeg')} style={{ width: scale(90), height: scale(90), borderRadius: verticalScale(100) }} />


                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), marginTop: verticalScale(10) }}>Daya Chitanis</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', paddingVertical: verticalScale(2), paddingHorizontal: scale(15), borderRadius: verticalScale(20), marginTop: verticalScale(5) }}>
                        <MaterialCommunityIcons name="star-circle-outline" color={'#FFFF2E'} size={verticalScale(16)} />
                        <Text style={{ color: colors.white, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }} > Level 22</Text>
                    </View>

                    <TouchableOpacity style={{ position: 'absolute', top: verticalScale(100), left: scale(200), backgroundColor: colors.white, borderRadius: verticalScale(100), width: scale(22), height: scale(22), justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="camera" color={colors.primary_blue} size={verticalScale(16)} />

                    </TouchableOpacity>

                </View>
            </LinearGradient>

            <View style={{ flex: 1, marginTop: verticalScale(-10), backgroundColor: "#f5f7fb", borderTopLeftRadius: verticalScale(14), borderTopRightRadius: verticalScale(14) }}>

                <Text style={{ marginTop: verticalScale(20), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), color: colors.black, marginLeft: scale(20) }}>Playing Stats</Text>
                <View style={{ marginTop: verticalScale(20), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center' }} >
                    <TouchableOpacity style={{ elevation: 1, width: scale(100), height: verticalScale(150), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                        <FontAwesome name="group" color={colors.primary_blue} size={verticalScale(30)} />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(15) }}>560</Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), width: scale(60), textAlign: 'center', marginTop: verticalScale(5) }}>Total Contests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 1, width: scale(100), height: verticalScale(150), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                        <MaterialCommunityIcons name="volleyball" color={colors.primary_blue} size={verticalScale(30)} />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(12) }}>100</Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), width: scale(60), textAlign: 'center', marginTop: verticalScale(5) }}>Total Matches</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 1, width: scale(100), height: verticalScale(150), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                        <FontAwesome name="trophy" color={colors.primary_blue} size={verticalScale(30)} />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(15) }}>350</Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), width: scale(60), textAlign: 'center', marginTop: verticalScale(5) }}>Win Contests</Text>

                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: verticalScale(40), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), color: colors.black, marginLeft: scale(20) }}>Personal Info</Text>

                <View style={{ backgroundColor: colors.white, width: scale(330), height: verticalScale(140), borderRadius: verticalScale(12), alignSelf: 'center', justifyContent: 'space-between', paddingVertical: verticalScale(30), marginTop: verticalScale(10), elevation: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ width: scale(80), color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginLeft: scale(30) }}>
                            Email</Text>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(10) }}>
                            cricfantasy11@email.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ width: scale(80), color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginLeft: scale(30) }}>
                            Phone</Text>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(10) }}>
                            +91 98100 98100</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ width: scale(80), color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginLeft: scale(30) }}>
                            Team Name</Text>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(10) }}>
                            CricFantasy11</Text>
                    </View>
                </View>
            </View>

        </View>

    );
}

export default MyProfile;