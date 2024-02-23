import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Alert } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const PlayerSelection = (props) => {

    const team1_img = props.route.params.team1_img
    const team1 = props.route.params.team1_name
    const team2_img = props.route.params.team2_img
    const team2 = props.route.params.team2_name

    const [KeeperTab, setkeeperTab] = useState(true)
    const [batsmanTab, setbatsmanTab] = useState()
    const [bowlerTab, setbowlerTab] = useState()
    const [AllrounderTab, setAllrounderTab] = useState()
    const [Keepercount, setkeepercount] = useState(0)
    const [batsmancount, setbatsmancount] = useState(0)
    const [bowlercount, setbowlercount] = useState(0)
    const [Allroundercount, setAllroundercount] = useState(0)
    const [allPlayerList, setAllPlayerList] = useState()
    const [playerList, setplayerList] = useState([])
    const [selectedkeeperId, setSelectedkeeperId] = useState(null);
    const [selectedbatsmanId, setSelectedbatsmanId] = useState(null);
    const [playercount, setplayercount] = useState(0)
    const [team1count, setteam1count] = useState(0)
    const [team2count, setteam2count] = useState(0)
    const [credits, setcredits] = useState(100);
    const [credits1, setcredits1] = useState(100);

    const [team , setTeam] =  useState([])


    useEffect(()=>{
        getPlayerList()

    },[])

    useEffect(() => {
        const isBatsman = team.some((x)=>x.role==='BAT')
        const isWicketKeeper = team.some((x)=>x.role==='WK')
        const isBowler = team.some((x)=>x.role==='BOWL')

        const creditsRemaining = team.reduce((sum, x) => sum - x.credits, 100);
        setcredits(creditsRemaining);


    }, [team ])

    const getPlayerList = () => {
        fetch('https://60a61d65c0c1fd00175f546a.mockapi.io/library/cvb').then((res) => {
            return res.json()
        }).then((response) => {
            console.log(response,'res')
            setAllPlayerList(response)
        })
    }


    const addItem = async (item, index) => {
        const tempTeam = []
        console.log('add item ', item , index)
        playerSelectedcheck(index)

        // tempTeam.push(item)
        // const player = playersdata.filter((x) => value.includes(x.id));
        setTeam(prevState =>{
            console.log('prevState', prevState)
            const _team = [...prevState , item]
            return _team
        })
        console.log('final', team)
    }

    const playerSelectedcheck = (index) => {
        let data = allPlayerList;
        data[index].isSelected = !data[index].isSelected
        setAllPlayerList([...data])
    }


    const renderkeeperItem = ({ item, index }) => {
        const backgroundColor = item.isSelected === true ? "#fff4dd" : colors.white;

        return (
            <View>
                {
                    item.role === "WK-Batsman" ? (
                        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center', height: verticalScale(50), width: scale(360), paddingHorizontal: scale(20), }}>
                            <View style={{}}>
                                <Image source={{ uri: item.playerImg }} style={{ width: scale(30), height: scale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                            </View>
                            <View style={{ width: scale(160), paddingLeft: scale(15), }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.player_name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                        {item.team_name},</Text>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(3) }}>
                                        {item.role}</Text>
                                </View>
                            </View>

                            <View style={{ width: scale(60), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(4) }}>{item.fantasyPoints}</Text>
                            </View>

                            <View style={{ width: scale(50), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.credits}</Text>
                            </View>

                            <TouchableOpacity onPress={() => { addItem(item, index) }} style={{ width: scale(40), height: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                                {item.isSelected === true ? <Icon name="minus-square-o" size={verticalScale(20)} color={colors.primary_red} /> : <Icon name="plus-square-o" size={verticalScale(20)} color={colors.primary_blue} />}
                            </TouchableOpacity>

                        </View>
                    ) : null
                }
            </View>
        )
    }

    const renderbatsmanItem = ({ item, index }) => {
        const backgroundColor = item.isSelected === true ? "#fff4dd" : colors.white;
        return (
            <View>
                {
                    item.role === "Batsman" ? (
                        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center', height: verticalScale(50), width: scale(360), paddingHorizontal: scale(20), }}>
                            <View style={{}}>
                                <Image source={{ uri: item.playerImg }} style={{ width: scale(30), height: scale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                            </View>
                            <View style={{ width: scale(160), paddingLeft: scale(15), }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.player_name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                        {item.team_name},</Text>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(3) }}>
                                        {item.role}</Text>
                                </View>
                            </View>

                            <View style={{ width: scale(60), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(4) }}>{item.fantasyPoints}</Text>
                            </View>

                            <View style={{ width: scale(50), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.credits}</Text>
                            </View>

                            <TouchableOpacity onPress={() => { addItem(item, index) }} style={{ width: scale(40), height: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                                {item.isSelected === true ? <Icon name="minus-square-o" size={verticalScale(20)} color={colors.primary_red} /> : <Icon name="plus-square-o" size={verticalScale(20)} color={colors.primary_blue} />}
                            </TouchableOpacity>

                        </View>
                    ) : null
                }
            </View>
        )
    }

    const renderbowlerItem = ({ item, index }) => {
        const backgroundColor = item.isSelected === true ? "#fff4dd" : colors.white;

        return (
            <View>
                {
                    item.role === "Bowler" ? (
                        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center', height: verticalScale(50), width: scale(360), paddingHorizontal: scale(20), }}>
                            <View style={{}}>
                                <Image source={{ uri: item.playerImg }} style={{ width: scale(30), height: scale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                            </View>
                            <View style={{ width: scale(160), paddingLeft: scale(15), }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.player_name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                        {item.team_name},</Text>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(3) }}>
                                        {item.role}</Text>
                                </View>
                            </View>

                            <View style={{ width: scale(60), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(4) }}>{item.fantasyPoints}</Text>
                            </View>

                            <View style={{ width: scale(50), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.credits}</Text>
                            </View>

                            <TouchableOpacity onPress={() => { addItem(item, index) }} style={{ width: scale(40), height: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                                {item.isSelected === true ? <Icon name="minus-square-o" size={verticalScale(20)} color={colors.primary_red} /> : <Icon name="plus-square-o" size={verticalScale(20)} color={colors.primary_blue} />}
                            </TouchableOpacity>

                        </View>
                    ) : null
                }
            </View>
        )
    }

    const renderAllRounderItem = ({ item, index }) => {
        const backgroundColor = item.isSelected === true ? "#fff4dd" : colors.white;

        return (
            <View>
                {
                    item.role === "Batting Allrounder" || item.role === "Bowling Allrounder" ? (
                        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center', height: verticalScale(50), width: scale(360), paddingHorizontal: scale(20), }}>
                            <View style={{}}>
                                <Image source={{ uri: item.playerImg }} style={{ width: scale(30), height: scale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                            </View>
                            <View style={{ width: scale(160), paddingLeft: scale(15), }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.player_name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                        {item.team_name},</Text>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(3) }}>
                                        {item.role}</Text>
                                </View>
                            </View>

                            <View style={{ width: scale(60), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(4) }}>{item.fantasyPoints}</Text>
                            </View>

                            <View style={{ width: scale(50), height: verticalScale(30) }}>
                                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.credits}</Text>
                            </View>

                            <TouchableOpacity onPress={() => { addItem(item, index) }} style={{ width: scale(40), height: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                                {item.isSelected === true ? <Icon name="minus-square-o" size={verticalScale(20)} color={colors.primary_red} /> : <Icon name="plus-square-o" size={verticalScale(20)} color={colors.primary_blue} />}
                            </TouchableOpacity>

                        </View>
                    ) : null
                }
            </View>
        )
    }



    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <View style={{ marginTop: verticalScale(40), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center', }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ width: scale(124) }} >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={verticalScale(26)}
                        color={colors.black}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', width: scale(180), }}>
                    <MaterialCommunityIcons
                        name="clock-alert-outline"
                        size={verticalScale(12)}
                        color={colors.primary_red}
                    />
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} > 02h 32m 12s</Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: scale(20), width: scale(360), marginTop: verticalScale(10) }}>


                <View style={{ width: scale(80) }}>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                        Players
                    </Text>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }}>
                        {playercount}/11
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: scale(160) }}>

                    <View>
                        <Image source={{ uri: team1_img }} style={{ width: verticalScale(30), height: verticalScale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                    </View>
                    <View style={{}}>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                            {team1}
                        </Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), textAlign: 'center' }}>
                            {team1count}
                        </Text>
                    </View>

                    <View style={{}}>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                            {team2}
                        </Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), textAlign: 'center' }}>
                            {team2count}
                        </Text>
                    </View>

                    <View>
                        <Image source={{ uri: team2_img }} style={{ width: verticalScale(30), height: verticalScale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                    </View>
                </View>




                <View style={{ width: scale(80) }}>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), textAlign: 'right' }}>
                        Credits Left
                    </Text>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), textAlign: 'right' }}>
                        {credits}
                    </Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: scale(20), marginTop: verticalScale(15), width: scale(360) }}>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 1 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 2 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 3 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 4 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 5 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 6 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 7 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 8 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 9 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount >= 10 ? colors.green : 'green', marginRight: scale(5) }} ></View>
                <View style={{ width: scale(28), height: verticalScale(10), borderRadius: verticalScale(2), backgroundColor: playercount == 11 ? colors.green : 'green', marginRight: scale(5) }} ></View>


            </View>

            <View style={{ marginTop: verticalScale(10), backgroundColor: colors.white, borderTopLeftRadius: verticalScale(10), borderTopRightRadius: verticalScale(10) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: verticalScale(30), elevation: 1, backgroundColor: colors.white, paddingHorizontal: scale(30) }}>

                    <TouchableOpacity onPress={() => { setkeeperTab(true), setbatsmanTab(false), setbowlerTab(false), setAllrounderTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: KeeperTab ? colors.green: 'white', height: verticalScale(30) }} >
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: KeeperTab ? colors.green : colors.greyColour, fontSize: scaleFont(14), marginTop: verticalScale(4) }} >WK({Keepercount})</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setkeeperTab(false), setbatsmanTab(true), setbowlerTab(false), setAllrounderTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: batsmanTab ? colors.green : 'white', height: verticalScale(30) }} >
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: batsmanTab ? colors.green : colors.greyColour, fontSize: scaleFont(14), marginTop: verticalScale(4) }} >BAT({batsmancount})</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setkeeperTab(false), setbatsmanTab(false), setbowlerTab(true), setAllrounderTab(false) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: bowlerTab ? colors.green : 'white', height: verticalScale(30) }} >
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: bowlerTab ? colors.green : colors.greyColour, fontSize: scaleFont(14), marginTop: verticalScale(4) }} >BOWL({bowlercount})</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setkeeperTab(false), setbatsmanTab(false), setbowlerTab(false), setAllrounderTab(true) }} style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: verticalScale(3), borderColor: AllrounderTab ? colors.green : 'white', height: verticalScale(30) }} >
                        <Text style={{ textAlign: 'center', fontFamily: constants.OPENSANS_FONT_BOLD, color: AllrounderTab ? colors.green : colors.greyColour, fontSize: scaleFont(14), marginTop: verticalScale(4) }} >AR({Allroundercount})</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ backgroundColor: '#f5f7fb', height: verticalScale(40), width: scale(360), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                    {
                        KeeperTab ? "You can select only 1 Wicket Keeper" : batsmanTab ? "You can select 3-6 batsman." : bowlerTab ? "You can pick 2-4 bowler" : "You can pick 2-4 All Rounder"
                    }
                </Text>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: colors.white, elevation: 1, height: verticalScale(30), width: scale(360), alignSelf: 'center', }}>
                <View style={{ height: verticalScale(30), width: scale(206), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>PLAYERS</Text>
                </View>
                <View style={{ height: verticalScale(30), alignItems: 'center', flexDirection: 'row', width: scale(154) }}>
                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>POINTS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20) }}>CREDITS</Text>
                        <Ionicon name="arrow-up-outline" size={verticalScale(12)} color={colors.black} />
                    </View>

                </View>
            </View>


            {
                KeeperTab && (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={allPlayerList}
                            style={{ marginBottom: verticalScale(100) }}
                            renderItem={renderkeeperItem}
                            keyExtractor={(item) => item.id}
                            initialNumToRender={20}
                            extraData={selectedkeeperId}
                        />
                    </View>
                )

            }{
                batsmanTab && (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            style={{ marginBottom: verticalScale(100) }}
                            data={allPlayerList}
                            renderItem={renderbatsmanItem}
                        />
                    </View>
                )

            }{
                bowlerTab && (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={allPlayerList}
                            style={{ marginBottom: verticalScale(100) }}
                            renderItem={renderbowlerItem}
                        />
                    </View>
                )

            }{
                AllrounderTab && (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={allPlayerList}
                            style={{ marginBottom: verticalScale(100) }}
                            renderItem={renderAllRounderItem}
                        />
                    </View>
                )

            }


            <View style={{ position: 'absolute', bottom: 0, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.green, borderTopLeftRadius: verticalScale(20), borderTopRightRadius: verticalScale(20), height: verticalScale(100), width: scale(360), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>

                <TouchableOpacity onPress={() => props.navigation.navigate("TeamPreview", { playerList: playerList, bowlerCount: bowlercount, batsmanCount: batsmancount, allRounderCount: Allroundercount, })} style={{ height: verticalScale(50), width: scale(160), borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: colors.green, backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                    <Text style={{ color: colors.green, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Team Preview</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("CaptainSelect", { playerList: playerList, bowlerCount: bowlercount, batsmanCount: batsmancount, allRounderCount: Allroundercount, keeperCount: Keepercount, team1: team1count, team2: team2count })} style={{ height: verticalScale(50), width: scale(160), justifyContent: 'center', alignItems: 'center', backgroundColor: playercount === 11 ? colors.green : 'green', borderRadius: verticalScale(6), borderWidth: playercount === 11 ? 1 : 0, borderColor: colors.green }}>
                    <Text style={{ color: playercount === 11 ? colors.primary_blue : colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Continue</Text>
                </TouchableOpacity>


            </View>








        </View >
    );
}

export default PlayerSelection;