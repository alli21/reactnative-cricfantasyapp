import React from 'react';
import { ImageBackground, View, StatusBar, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { colors, constants, scale, scaleFont, verticalScale } from '../../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const TeamPreview = (props) => {
    const playerList = props.route.params.playerList
    const bowlerCount = props.route.params.bowlerCount + 1;
    const batsmanCount = props.route.params.batsmanCount + 1;
    const allRounderCount = props.route.params.allRounderCount + 1;

    console.log("This is passed Player List", props.route.params.team, bowlerCount, allRounderCount, batsmanCount)

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />
            <ImageBackground style={{ flex: 1, alignItems: 'center', }} source={require("../../../assets/images/pitch.jpeg")} >

                <View style={{ marginTop: verticalScale(40), flexDirection: 'row', paddingHorizontal: scale(20), alignSelf: 'flex-start' }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', marginTop: verticalScale(60), height: verticalScale(100) }}>
                    <FlatList
                        data={playerList}
                        horizontal
                        renderItem={({ item }) => {
                            if (item.role == "WK-Batsman") {
                                return (
                                    <View style={{ width: scale(60), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={{ uri: item.playerImg }} style={{ width: verticalScale(44), height: verticalScale(44), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                                        {
                                            item.captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >C</Text>
                                            ) : null
                                        }
                                        {
                                            item.vice_captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >VC</Text>
                                            ) : null
                                        }
                                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(10) }}>{item.player_name.length > 10 ? item.player_name.split("")[0] + ". " + item.player_name.split(" ")[1] : item.player_name}</Text>
                                    </View>
                                )
                            }

                        }}
                    />
                </View>

                <View style={{ width: scale(360), marginTop: verticalScale(20), height: verticalScale(100), alignItems: 'center', justifyContent: 'center', }}>
                    <FlatList
                        data={playerList}
                        // numColumns={batsmanCount}
                        horizontal
                        renderItem={({ item }) => {
                            console.log(item)
                            if (item.role == "Batsman") {
                                return (
                                    <View style={{ width: scale(65), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={{ uri: item.playerImg }} style={{ width: verticalScale(44), height: verticalScale(44), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                                        {
                                            item.captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >C</Text>
                                            ) : null
                                        }
                                        {
                                            item.vice_captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >VC</Text>
                                            ) : null
                                        }

                                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(10) }}>{item.player_name.length > 10 ? item.player_name.split("")[0] + ". " + item.player_name.split(" ")[1] : item.player_name}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>


                <View style={{ width: scale(360), marginTop: verticalScale(40), height: verticalScale(100), alignItems: 'center', justifyContent: 'center', }}>
                    <FlatList
                        data={playerList}
                        horizontal
                        renderItem={({ item }) => {
                            console.log(item)
                            if (item.role == "Batting Allrounder" || item.role == "Bowling Allrounder") {
                                return (
                                    <View style={{ width: scale(70), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={{ uri: item.playerImg }} style={{ width: verticalScale(44), height: verticalScale(44), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                                        {
                                            item.captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >C</Text>
                                            ) : null
                                        }
                                        {
                                            item.vice_captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >VC</Text>
                                            ) : null
                                        }

                                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(10) }}>{item.player_name.length > 10 ? item.player_name.split("")[0] + ". " + item.player_name.split(" ")[1] : item.player_name}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>


                <View style={{ width: scale(360), marginTop: verticalScale(40), height: verticalScale(100), alignItems: 'center', justifyContent: 'center', }}>
                    <FlatList
                        data={playerList}
                        horizontal
                        renderItem={({ item }) => {
                            console.log(item)
                            if (item.role == "Bowler") {
                                return (
                                    <View style={{ width: scale(70), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image defaultSource="https://h.cricapi.com/img/players/aea85638-f6ef-47c5-884f-bc0fafd11d63.jpg" onError={(error) => {
                                            console.log(error)
                                            return (<Image source={{ uri: "https://h.cricapi.com/img/players/aea85638-f6ef-47c5-884f-bc0fafd11d63.jpg" }} style={{ width: verticalScale(44), height: verticalScale(44), borderRadius: verticalScale(100), resizeMode: "stretch" }} />)
                                        }} source={{ uri: item.playerImg }} style={{ width: verticalScale(44), height: verticalScale(44), borderRadius: verticalScale(100), resizeMode: "stretch" }} />

                                        {
                                            item.captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >C</Text>
                                            ) : null
                                        }
                                        {
                                            item.vice_captain ? (
                                                <Text style={{ position: "absolute", paddingHorizontal: verticalScale(8), borderRadius: verticalScale(10), backgroundColor: colors.black, color: colors.white, textAlign: "center", top: verticalScale(2), right: scale(0), borderWidth: 1, borderColor: colors.white }} >VC</Text>
                                            ) : null
                                        }

                                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(10) }}>{item.player_name.length > 10 ? item.player_name.split("")[0] + ". " + item.player_name.split(" ")[1] : item.player_name}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

            </ImageBackground>

        </View>
    );
}

export default TeamPreview;