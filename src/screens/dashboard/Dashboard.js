import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../utils';
import CustomSlider from '../../containers/Carousel/CustomSlider'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { bannercarouseldata } from '../../utils/Data';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../components/Loader';
import { getMatches } from '../../api consumption/restApi';
import { getScore } from '../../api consumption/restApi';


const Dashboard = (props) => {
    const theme = useSelector(state => state.theme)

    const [cricketTab, setcricketTab] = useState(true)
    const [footballTab, setfootballTab] = useState(false)
    const [basketballTab, setbasketballTab] = useState(false)
    const [baseballTab, setbaseballTab] = useState(false)
    const [rugbyTab, setrugbyTab] = useState(false)
    const [fixturesTab, setfixturesTab] = useState(true)
    const [liveTab, setliveTab] = useState(false)
    const [resultsTab, setresultsTab] = useState(false)
    const [matchdata, setmatchdata] = useState([])
    const [loadingDashScreen, setLoadingDashScreen] = useState(false)


    // const getMatches = async () => {
        
    //     setLoadingDashScreen(true)
    //     // fetch(
    //     //   "https://api.cricapi.com/v1/matches?apikey=d0d6c064-4700-4ddc-ad12-791b7190f8b3&offset=0"
    //     // )
    //       .then((res) => {
    //         return res.json()
    //       })
    //       .then((response) => {
    //         const today = new Date()
    //         console.log(response)
    //         console.log(response.data)

    //         const data = response.data.map((match) => {
    //             debugger
    //           return {
    //             match_id: match.id,
    //             status: match.status,
    //             time_left: match.dateTimeGMT,
    //             tournament: match.venue,
    //             team1_name: match.teamInfo[0].shortname,
    //             team2_name: match.teamInfo[1].shortname,
    //             team1: match.teamInfo[0].img,
    //             team2: match.teamInfo[1].img,
    //           }
    //         })
    //         console.log(data)
    //         setmatchdata(data)
    //         console.log(matchdata)
    //         setLoadingDashScreen(false)
    //       })
    //       .catch((error) => console.log(error))
    //   }
    

    useEffect(() => {
        getMatches().then((res)=>{
            const _data = res.data.data
            console.log('runnn',_data)
            const filterData = _data.filter((match)=>match.teamInfo)
            const data = filterData.map((match)=>{
                return  {
                    match_id: match.id,
                    status: match.status,
                    time_left: match.dateTimeGMT,
                    tournament: match.venue,
                    team1_name: match.teamInfo[0].shortname,
                    team2_name: match.teamInfo[1].shortname,
                    team1: match.teamInfo[0].img,
                    team2: match.teamInfo[1].img,
                  }
            })
            console.log('runnn',data)

            setmatchdata(data)

        })
        
        .catch((err)=>console.log(err))
        getScore().then((res)=>{
            const _data = res.data.data
          
            const data1 = _data.map((score)=>{
                return{
                    match_id:score.id,
                    staus:score.status,
                    team1_name:score.t1s,
                    team2_name:score.t2s,
                    team1_img:score.t1img,
                    team2_img:score.t2img
                }
            })
            console.log('run',data1)

            setmatchdata(data1)

        })
        .catch((err)=>console.log(err))
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>

            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            {/* <Loader loading={loadingDashScreen} /> */}
            <View
              
                style={{
                    width: scale(360),
                    height: verticalScale(80),
                    alignSelf: 'center',
                    backgroundColor: colors.green,

                }}>
                <View style={{ marginTop: verticalScale(35), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}  >
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
                    <TouchableOpacity onPress={() => props.navigation.navigate('NotificationScreen')}>
                        <Ionicon name="notifications-outline" color='white' size={verticalScale(22)} />
                    </TouchableOpacity>
                </View>
            </View>




            <View style={{ backgroundColor: theme.colors.white, borderTopLeftRadius: verticalScale(10), borderTopRightRadius: verticalScale(10) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: verticalScale(65), elevation: 1 }}>

                    <TouchableOpacity onPress={() => { setcricketTab(true), setbasketballTab(false), setfootballTab(false), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: cricketTab ? colors.green : 'white', height: verticalScale(65) }} >
                        <Image source={require('../../assets/images/cricketIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: cricketTab ? colors.green : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Cricket</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(true), setfootballTab(false), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: basketballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                        <Image source={require('../../assets/images/basketballIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: basketballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Basketball</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(true), setbaseballTab(false), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: footballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                        <Image source={require('../../assets/images/soccerIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: footballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Football</Text>

                    </TouchableOpacity> */}

                    {/* <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(false), setbaseballTab(true), setrugbyTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: baseballTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                        <Image source={require('../../assets/images/baseballIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: baseballTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Baseball</Text>
                    </TouchableOpacity> */}

{/* 
                    <TouchableOpacity onPress={() => { setcricketTab(false), setbasketballTab(false), setfootballTab(false), setbaseballTab(false), setrugbyTab(true) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: rugbyTab ? colors.primary_blue : 'white', height: verticalScale(65) }} >
                        <Image source={require('../../assets/images/rugbyIcon.png')} style={{ width: scale(28), height: scale(28) }} />
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: rugbyTab ? colors.primary_blue : colors.greyColour, fontSize: scaleFont(11), marginTop: verticalScale(4) }} >Baseball</Text>
                    </TouchableOpacity> */}

                </View>
            </View>


            <View style={{ flex: 1, backgroundColor: '#f5f7fb' }}>


                {
                    cricketTab && (
                        <View style={{ flex: 1 }}>

                            <ScrollView showsVerticalScrollIndicator={false} >
                                <View style={{ marginTop: verticalScale(20), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(16), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}  >My Matches</Text>
                                    <Text onPress={() => props.navigation.navigate('MyContest')} style={{ color: colors.green, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14) }} >
                                        View All
                                    </Text>


                                </View>

                                <View style={{ marginTop: verticalScale(10) }}>
                                    <FlatList
                                        data={matchdata}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => props.navigation.navigate('Contestselection', { team1_name: item.team1_name, team2_name: item.team2_name, time_left: item.time_left, team1_img: item.team1, team2_img: item.team2 })} activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(300), alignItems: 'center', alignSelf: 'center', marginHorizontal: scale(10), paddingHorizontal: scale(20), backgroundColor: colors.white, borderRadius: verticalScale(12), height: verticalScale(90) }}>
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

                                <CustomSlider data={bannercarouseldata} />



                                <View style={{ marginTop: verticalScale(20), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(16), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}  >Select a Match</Text>
                                </View>

                                <View style={{ marginTop: verticalScale(10) }}>
                                    <FlatList
                                        data={matchdata}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item }) => {
                                            return (
                                                <TouchableOpacity onPress={() => props.navigation.navigate('Contestselection', { team1_name: item.team1_name, team2_name: item.team2_name, time_left: item.time_left, team1_img: item.team1, team2_img: item.team2 })} activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(340), alignItems: 'center', alignSelf: 'center', marginVertical: verticalScale(10), paddingHorizontal: scale(20), backgroundColor: colors.white, borderRadius: verticalScale(12), height: verticalScale(90) }}>
                                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                        <Image source={{ uri: item.team1 }} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                        <Text style={{ color: colors.black, width: scale(70), textAlign: "center" }}>{item.team1_name?.length > 20 ? item.team1_name.split(" ")[0] + " " + item.team1_name.split(" ")[1] + " ..." : item.team1_name}</Text>


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


                            </ScrollView>



                            {/* {
                                fixturesTab && (
                                    <View>
                                        <FlatList
                                            data={matchdata}
                                            renderItem={({ item }) => {
                                                return (
                                                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(330), alignItems: 'center', alignSelf: 'center', marginVertical: verticalScale(5), paddingHorizontal: scale(10), backgroundColor: '#c4c4c4', borderRadius: verticalScale(12) }}>
                                                        <Image source={item.team1} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ color: colors.black }} >
                                                                {item.tournament}
                                                            </Text>
                                                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                                                V/S
                                                            </Text>
                                                            <Text style={{ backgroundColor: 'orange', paddingHorizontal: scale(8), borderRadius: verticalScale(10) }}>
                                                                {item.time_left}
                                                            </Text>
                                                        </View>
                                                        <Image source={item.team2} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    </TouchableOpacity>
                                                )

                                            }}
                                        />
                                    </View>
                                )
                            }

                            {
                                liveTab && (
                                    <View>
                                        <FlatList
                                            data={Livematchdata}
                                            renderItem={({ item }) => {
                                                return (
                                                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(330), alignItems: 'center', alignSelf: 'center', marginVertical: verticalScale(5), paddingHorizontal: scale(10), backgroundColor: '#c4c4c4', borderRadius: verticalScale(12) }}>
                                                        <Image source={item.team1} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ color: colors.black }} >
                                                                {item.tournament}
                                                            </Text>
                                                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD }}>
                                                                V/S
                                                            </Text>
                                                            <Text style={{ backgroundColor: 'orange', paddingHorizontal: scale(8), borderRadius: verticalScale(10) }}>
                                                                {item.time_left}
                                                            </Text>
                                                        </View>
                                                        <Image source={item.team2} style={{ height: verticalScale(40), width: verticalScale(40), borderRadius: verticalScale(40), borderWidth: 1, borderColor: 'black' }} />
                                                    </TouchableOpacity>
                                                )

                                            }}
                                        />
                                    </View>
                                )
                            }
                            {
                                resultsTab && (
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>Play Contest to view results.</Text>
                                    </View>
                                )
                            } */}


                        </View>
                    )
                }
                {
                    footballTab && (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(24), fontFamily: constants.OPENSANS_FONT_BOLD }}>Coming Soon</Text>
                        </View>
                    )
                }
                {
                    basketballTab && (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(24), fontFamily: constants.OPENSANS_FONT_BOLD }}>Coming Soon</Text>
                        </View>
                    )
                }
                {
                    baseballTab && (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(24), fontFamily: constants.OPENSANS_FONT_BOLD }}>Coming Soon</Text>
                        </View>
                    )
                }
                {
                    rugbyTab && (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(24), fontFamily: constants.OPENSANS_FONT_BOLD }}>Coming Soon</Text>
                        </View>
                    )
                }

            </View>
        </View>
    );
}

export default Dashboard;