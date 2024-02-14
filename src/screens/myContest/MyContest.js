import React, { useState, useEffect } from 'react';
import { Animated, View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Keyboard, Image, ScrollView, TextInput } from 'react-native';
import { colors, scaleFont, scale, verticalScale, constants } from '../../utils';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { moviesdata, genredata, recentsearches, popularsearches, seriesdata, matchdata, completedMatchData } from '../../utils/Data';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const MyContest = (props) => {
    const theme = useSelector(state => state.theme)

    const [cricketTab, setcricketTab] = useState(true)
    const [footballTab, setfootballTab] = useState(false)
    const [basketballTab, setbasketballTab] = useState(false)
    const [baseballTab, setbaseballTab] = useState(false)
    const [rugbyTab, setrugbyTab] = useState(false)
    const [upcoming, setupcoming] = useState(true)
    const [live, setlive] = useState(false)
    const [completed, setcompleted] = useState(false)
    const navigation = useNavigation()



    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>

                <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />

               <View
                
                style={{
                    width: scale(360),
                    height: verticalScale(80),
                    alignSelf: 'center',
                    backgroundColor:colors.green
                }}>
                    <View style={{ marginTop: verticalScale(35), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}  >
                            <Image source={require("../../assets/images/avatar1.jpeg")} style={{ width: verticalScale(30), height: verticalScale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />

                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: scale(270), justifyContent: 'center' }}>
                        <Icon
                        name="trophy"
                        size={verticalScale(20)}
                        color={colors.white}
                    />
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(18), marginLeft: scale(10) }}>Stars Cric</Text>
                        </View>
                        <Ionicon name="notifications-outline" color='white' size={verticalScale(22)} />
                    </View>
                </View>


                <View style={{ backgroundColor: theme.colors.white, borderTopLeftRadius: verticalScale(10), borderTopRightRadius: verticalScale(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: verticalScale(65), elevation: 1 }}>

                        <TouchableOpacity onPress={() => { setcricketTab(true), setbasketballTab(false), setfootballTab(false), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: cricketTab ? colors.green: 'white', height: verticalScale(65) }} >
                            <Image source={require('../../assets/images/cricketIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                            <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: cricketTab ? colors.green: colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Cricket</Text>
                        </TouchableOpacity>
                

                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: '#f5f7fb' }}>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center', marginTop: verticalScale(10), height: verticalScale(60) }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(true), setlive(false), setcompleted(false) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: upcoming ? colors.green : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: upcoming ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Upcoming</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(false), setlive(true), setcompleted(false) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: live ? colors.green : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: live ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Live</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setupcoming(false), setlive(false), setcompleted(true) }} style={{ width: scale(100), height: verticalScale(40), borderRadius: verticalScale(20), backgroundColor: completed ? colors.green : colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                            <Text style={{ color: completed ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Completed</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        upcoming && (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={matchdata}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(340), alignItems: 'center', alignSelf: 'center', marginVertical: verticalScale(10), paddingHorizontal: scale(20), backgroundColor: colors.white, borderRadius: verticalScale(12), height: verticalScale(90) }}>
                                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <Image source={{ uri: item.team1 }} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    <Text style={{ color: colors.black, width: scale(70), textAlign: "center" }}>{item.team1_name.length > 20 ? item.team1_name.split(" ")[0] + " " + item.team1_name.split(" ")[1] + " ..." : item.team1_name}</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: colors.black }} >
                                                        {item.tournament}
                                                    </Text>
                                                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                                        V/S
                                                    </Text>
                                                    <Text style={{ paddingHorizontal: scale(8), borderRadius: verticalScale(10), color: colors.primary_red }}>
                                                        {item.time_left}
                                                    </Text>
                                                </View>
                                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <Image source={{ uri: item.team2 }} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    <Text style={{ color: colors.black, width: scale(70), textAlign: "center" }}>{item.team2_name.length > 20 ? item.team2_name.split(" ")[0] + " " + item.team2_name.split(" ")[1] + " ..." : item.team2_name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )

                                    }}
                                />
                            </View>
                        )
                    }
                    {
                        live && (
                            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                                <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(16), width: scale(180), textAlign: "center" }}>Alas! There are on live matches at the moment</Text>

                            </View>
                        )
                    }
                    {
                        completed && (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={completedMatchData}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(340), alignItems: 'center', alignSelf: 'center', marginVertical: verticalScale(10), paddingHorizontal: scale(20), backgroundColor: colors.white, borderRadius: verticalScale(12), height: verticalScale(90) }}>
                                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <Image source={item.team1} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    <Text style={{ color: colors.black, width: scale(70), textAlign: "center" }}>{item.team1_name.length > 20 ? item.team1_name.split(" ")[0] + " " + item.team1_name.split(" ")[1] + " ..." : item.team1_name}</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: colors.black }} >
                                                        {item.tournament}
                                                    </Text>
                                                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                                        V/S
                                                    </Text>
                                                </View>
                                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <Image source={item.team2} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    <Text style={{ color: colors.black, width: scale(70), textAlign: "center" }}>{item.team2_name.length > 20 ? item.team2_name.split(" ")[0] + " " + item.team2_name.split(" ")[1] + " ..." : item.team2_name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )

                                    }}
                                />
                            </View>
                        )
                    }


                </View>

            </TouchableOpacity>
        </View>
    );
}

export default MyContest;