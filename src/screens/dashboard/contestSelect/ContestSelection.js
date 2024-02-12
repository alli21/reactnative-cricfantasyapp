import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList, Modal, TextInput, ScrollView } from 'react-native';
import { colors, scale, scaleFont, verticalScale, constants } from '../../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { contestData } from '../../../utils/Data';
import LinearGradient from 'react-native-linear-gradient';


const ContestSelection = (props) => {
    const team1_name = props.route.params.team1_name
    const team2_name = props.route.params.team2_name
    const time_left = props.route.params.time_left
    const team1_img = props.route.params.team1_img
    const team2_img = props.route.params.team2_img

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(360),
                    height: verticalScale(80),
                    alignSelf: 'center',
                }}>
                <View style={{ marginTop: verticalScale(40), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center', justifyContent: 'space-between', }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: scale(220) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: scale(100), justifyContent: 'space-between' }}>
                            <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16) }} >{team1_name}</Text>
                            <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} >VS</Text>
                            <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16) }}  >{team2_name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialCommunityIcons
                                name="clock-alert-outline"
                                size={verticalScale(12)}
                                color={colors.primary_red}
                            />
                            <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} >  {time_left}</Text>

                        </View>
                    </View>
                </View>
            </LinearGradient>



            <View style={{ flex: 1, backgroundColor: '#f5f7fb', }}>
                <FlatList
                    data={contestData}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginVertical: verticalScale(20) }}>
                                <View style={{ backgroundColor: colors.white, width: scale(330), height: verticalScale(100), alignSelf: 'center', borderTopLeftRadius: verticalScale(6), borderTopRightRadius: verticalScale(6) }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: scale(15), alignItems: 'center', justifyContent: 'space-between', marginTop: verticalScale(5) }}>
                                        <View>
                                            <Text style={{ color: colors.greyColour, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                                Total Prize</Text>
                                            <Text style={{ color: colors.black, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                                {'\u20B9'}{item.prize}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Playerselection', { team1_img: team1_img, team2_img: team2_img, team1_name: team1_name, team2_name: team2_name })} style={{ backgroundColor: colors.primary_blue, justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(6), paddingHorizontal: scale(20), paddingVertical: verticalScale(6) }}>
                                            <Text style={{ color: colors.white, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Join {'\u20B9'}{item.joining_fee}</Text>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{ backgroundColor: '#f5f7fb', width: scale(302), height: verticalScale(4), borderRadius: verticalScale(20), marginTop: verticalScale(15), marginHorizontal: scale(15) }} />

                                    <View style={{ backgroundColor: colors.green, width: scale((item.contest_status * 302) / 100), height: verticalScale(4), borderRadius: verticalScale(20), marginTop: verticalScale(-4), marginHorizontal: scale(15) }} />


                                    <View style={{ flexDirection: 'row', paddingHorizontal: scale(15), alignItems: 'center', justifyContent: 'space-between', marginTop: verticalScale(5) }}>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(8), fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                            {item.entries} Entries</Text>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(8), fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                            {item.contest_status}% filled</Text>
                                    </View>

                                </View>

                                <View style={{ backgroundColor: colors.white, width: scale(330), height: verticalScale(30), marginTop: verticalScale(3), alignSelf: 'center', justifyContent: 'center', borderBottomLeftRadius: verticalScale(6), borderBottomRightRadius: verticalScale(6) }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: scale(15), alignItems: 'center', justifyContent: 'space-between', marginTop: verticalScale(5) }}>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                            {item.winners} Winners</Text>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                            {item.joined_status}</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    }}
                />


            </View>
        </View >


    );
}

export default ContestSelection;