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

     const _DATA = [{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"f4f04183-23e9-4605-a475-00b0982a5f43","team_name":"Auckland","player_name":"William O Donnell","role":"Batsman","battingStyle":null,"bowlingStyle":"Right-arm offbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"640db879-40e1-4a53-9422-170c7b8051b6","team_name":"Auckland","player_name":"Robert ODonnell","role":"Batsman","battingStyle":null,"bowlingStyle":"","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/640db879-40e1-4a53-9422-170c7b8051b6.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"604d7c88-4f5d-40d9-b08b-330420964d87","team_name":"Auckland","player_name":"Lockie Ferguson","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm fast","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/604d7c88-4f5d-40d9-b08b-330420964d87.jpg","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"20d3e9b8-b0be-4db4-ae76-3821db4fd781","team_name":"Auckland","player_name":"Adithya Ashok","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm legbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/20d3e9b8-b0be-4db4-ae76-3821db4fd781.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"938ccc22-0542-4d2c-9cd3-494ce3e2d072","team_name":"Auckland","player_name":"Sean Solia","role":"Batsman","battingStyle":null,"bowlingStyle":"Left-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"691b9e75-baf1-4284-886d-4dcc9a8139de","team_name":"Auckland","player_name":"Ben Lister","role":"Bowler","battingStyle":null,"bowlingStyle":"Left-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"2de8b178-3f7e-4677-a126-6d9b9242d1e5","team_name":"Auckland","player_name":"Louis Delport","role":"Bowler","battingStyle":null,"bowlingStyle":"Left-arm orthodox","country":"South Africa","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"b5208054-8543-482d-9d83-a9f0a3bbfada","team_name":"Auckland","player_name":"Mark Chapman","role":"Batting Allrounder","battingStyle":null,"bowlingStyle":"Left-arm orthodox","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/b5208054-8543-482d-9d83-a9f0a3bbfada.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"7e5ff94d-975a-4e1f-8bdd-bb2844885abc","team_name":"Auckland","player_name":"George Worker","role":"Batting Allrounder","battingStyle":null,"bowlingStyle":"Left-arm orthodox","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/7e5ff94d-975a-4e1f-8bdd-bb2844885abc.jpg","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"466722a2-c8af-49ee-ba7e-caddde3c110f","team_name":"Auckland","player_name":"Danru Ferns","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"29895c79-b067-4e91-8a06-cc457be45ca6","team_name":"Auckland","player_name":"Ben Horne","role":"WK-Batsman","battingStyle":null,"bowlingStyle":"Left-arm orthodox","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/29895c79-b067-4e91-8a06-cc457be45ca6.jpg","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"7699048f-34c5-49a0-8665-1efeeb29d40b","team_name":"Central Districts","player_name":"Brett Randell","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/7699048f-34c5-49a0-8665-1efeeb29d40b.jpg","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"8d0cace0-e1dd-45e2-9176-238e8ebc2cd9","team_name":"Central Districts","player_name":"Brett Johnson","role":"Bowling Allrounder","battingStyle":null,"bowlingStyle":"Right-arm fast-medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"66abb8c1-eda7-4260-9d32-45f2123c6a1c","team_name":"Central Districts","player_name":"Greg Hay","role":"Batsman","battingStyle":null,"bowlingStyle":"Right-arm offbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"3c6601f0-87f8-491e-bebb-5a194e8dbefe","team_name":"Central Districts","player_name":"Raymond Toole","role":"Bowler","battingStyle":null,"bowlingStyle":"Left-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"baf1f65c-86db-491f-8d5a-675057c6c779","team_name":"Central Districts","player_name":"Seth Rance","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/baf1f65c-86db-491f-8d5a-675057c6c779.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"2bb9d3d9-4c8a-49fa-9516-76f514e56087","team_name":"Central Districts","player_name":"Tom Bruce","role":"Batting Allrounder","battingStyle":null,"bowlingStyle":"Right-arm offbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/2bb9d3d9-4c8a-49fa-9516-76f514e56087.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"18249dbf-6ece-4c0c-bcd7-7e0c6a805b76","team_name":"Central Districts","player_name":"Doug Bracewell","role":"Bowler","battingStyle":null,"bowlingStyle":"Right-arm fast-medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/18249dbf-6ece-4c0c-bcd7-7e0c6a805b76.jpg","fantasy_points":"0","credits":"8","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"aae85521-f914-4986-9d23-f22746855a37","team_name":"Central Districts","player_name":"Jayden Lennox","role":"Bowling Allrounder","battingStyle":null,"bowlingStyle":"Left-arm orthodox","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"d88725e0-bb86-496d-9541-f724fadd36b9","team_name":"Central Districts","player_name":"Ben Smith","role":"Batsman","battingStyle":null,"bowlingStyle":"Right-arm offbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"07dd996a-3147-410c-a87a-f877f5f17479","team_name":"Central Districts","player_name":"Josh Clarkson","role":"Batting Allrounder","battingStyle":null,"bowlingStyle":"Right-arm medium","country":"New Zealand","playerImg":"https://h.cricapi.com/img/icon512.png","fantasy_points":"0","credits":"9","playing_11":"0"},{"match_id":"8cc896e3-7fd1-4fde-bfa3-e477942b354f","player_id":"0095ee03-e9a5-4418-b568-fc6eaa60ea72","team_name":"Central Districts","player_name":"Ross Taylor","role":"Batsman","battingStyle":null,"bowlingStyle":"Right-arm offbreak","country":"New Zealand","playerImg":"https://h.cricapi.com/img/players/0095ee03-e9a5-4418-b568-fc6eaa60ea72.jpg","fantasy_points":"0","credits":"8","playing_11":"0"}]


    useEffect(() => {
        setAllPlayerList(_DATA)
    }, [])

    const getPlayerList = () => {
        fetch('https://60a61d65c0c1fd00175f546a.mockapi.io/library/cvb').then((res) => {
            return res.json()
        }).then((response) => {
            console.log(response,'res')
            setAllPlayerList(response)
        })
    }


    const addItem = async (item, index) => {
        console.log(team1, team2, 'teamm')
        let data = playerList;
    
        if (item.role === "WK-Batsman") {
            if (Keepercount === 1) {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setkeepercount(Keepercount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    Alert.alert("You need to Select atleast Keeper");
                }
            } else {
                if (credits === 0 || credits - item.credits >= 0) {
                    let newdata = data.concat(item);
                    const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                    setplayerList([...arUnique]);
                    playerSelectedcheck(index);
                    setplayercount(playercount + 1);
                    setkeepercount(Keepercount + 1);
                    item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                    setcredits(credits - parseFloat(item.credits));
                } else {
                    Alert.alert("You do not have sufficient credit points");
                }
            }
        }
    
        if (item.role === "Batsman") {
            if (batsmancount === 6) {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setbatsmancount(batsmancount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    Alert.alert("You can Select only 6 batsman");
                }
            } else {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setbatsmancount(batsmancount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    if (Keepercount === 1 && playercount < 11) {
                        if (credits === 0 || credits - item.credits >= 0) {
                            let newdata = data.concat(item);
                            const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                            setplayerList([...arUnique]);
                            playerSelectedcheck(index);
                            setplayercount(playercount + 1);
                            setbatsmancount(batsmancount + 1);
                            item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                            setcredits(credits - parseFloat(item.credits));
                        } else {
                            Alert.alert("You do not have sufficient credit points");
                        }
                    } else {
                        if (Keepercount === 0) {
                            Alert.alert("Please Select 1 Keeper First");
                        } else {
                            Alert.alert("Team Full");
                        }
                    }
                }
            }
        }
    
        if (item.role === "Bowler") {
            if (bowlercount === 4) {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setbowlercount(bowlercount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    Alert.alert("You can Select only 4 bowler");
                }
            } else {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setbowlercount(bowlercount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    if (batsmancount >= 3 && Allroundercount >= 2 && Keepercount === 1 && playercount < 11) {
                        if (credits === 0 || credits - item.credits >= 0) {
                            let newdata = data.concat(item);
                            console.log(newdata, 'newdata');
                            const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                            setplayerList([...arUnique]);
                            playerSelectedcheck(index);
                            setplayercount(playercount + 1);
                            setbowlercount(bowlercount + 1);
                            item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                            setcredits(credits - parseFloat(item.credits));
                        } else {
                            Alert.alert("You do not have sufficient credit points");
                        }
                    } else {
                        if (batsmancount < 3) {
                            if (Allroundercount < 2 && playercount >= 9) {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 2 All Rounders ");
                                }
                            } else {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 3 Batsman");
                                }
                            }
                        } else {
                            if (Allroundercount < 2 && playercount >= 9) {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 2 All Rounders ");
                                }
                            } else {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    if (playercount < 11) {
                                        if (credits === 0 || credits - item.credits >= 0) {
                                            let newdata = data.concat(item);
                                            const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                                            setplayerList([...arUnique]);
                                            playerSelectedcheck(index);
                                            setplayercount(playercount + 1);
                                            setbowlercount(bowlercount + 1);
                                            item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                                            setcredits(credits - parseFloat(item.credits));
                                        } else {
                                            Alert.alert("You do not have sufficient credit points");
                                        }
                                    } else {
                                        Alert.alert("Team Full");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    
        if (item.role === "Batting Allrounder" || item.role === "Bowling Allrounder") {
            if (Allroundercount === 4) {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setAllroundercount(Allroundercount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    Alert.alert("You can Select only 4 All Rounders");
                }
            } else {
                if (item.isSelected === true) {
                    playerSelectedcheck(index);
                    data.splice(data.findIndex(e => e.player_id === item.player_id), 1);
                    setplayerList([...data]);
    
                    setAllroundercount(Allroundercount - 1);
                    setplayercount(playercount - 1);
                    item.team_name === team2 ? setteam2count(team2count - 1) : setteam1count(team1count - 1);
                    setcredits(credits + parseFloat(item.credits));
                } else {
                    if (batsmancount >= 3 && bowlercount >= 2 && Keepercount === 1 && playercount < 11) {
                        if (credits === 0 || credits - item.credits >= 0) {
                            let newdata = data.concat(item);
                            const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                            setplayerList([...arUnique]);
                            playerSelectedcheck(index);
                            setplayercount(playercount + 1);
                            setAllroundercount(Allroundercount + 1);
                            item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                            setcredits(credits - parseFloat(item.credits));
                        } else {
                            Alert.alert("You do not have sufficient credit points");
                        }
                    } else {
                        if (batsmancount < 3) {
                            if (bowlercount < 2) {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 2 Bowlers First");
                                }
                            } else {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 3 Batsman First");
                                }
                            }
                        } else {
                            if (bowlercount < 2) {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    Alert.alert("Please Select at least 2 Bowlers First");
                                }
                            } else {
                                if (Keepercount === 0) {
                                    Alert.alert("Please Select 1 Keeper First");
                                } else {
                                    if (playercount < 11) {
                                        if (credits === 0 || credits - item.credits >= 0) {
                                            let newdata = data.concat(item);
                                            const arUnique = newdata.filter((a, i) => newdata.findIndex((s) => a.player_id === s.player_id) === i);
                                            setplayerList([...arUnique]);
                                            playerSelectedcheck(index);
                                            setplayercount(playercount + 1);
                                            setAllroundercount(Allroundercount + 1);
                                            item.team_name === team2 ? setteam2count(team2count + 1) : setteam1count(team1count + 1);
                                            setcredits(credits - parseFloat(item.credits));
                                        } else {
                                            Alert.alert("You do not have sufficient credit points");
                                        }
                                    } else {
                                        Alert.alert("Team Full");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
                {playercount === 11 && (
                <TouchableOpacity onPress={() => props.navigation.navigate("CaptainSelect", { playerList: playerList, bowlerCount: bowlercount, batsmanCount: batsmancount, allRounderCount: Allroundercount, keeperCount: Keepercount, team1: team1count, team2: team2count })} style={{ height: verticalScale(50), width: scale(160), justifyContent: 'center', alignItems: 'center', backgroundColor: playercount === 11 ? colors.green : 'green', borderRadius: verticalScale(6), borderWidth: playercount === 11 ? 1 : 0, borderColor: colors.green }}>
                    <Text style={{ color: playercount === 11 ? colors.primary_blue : colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Continue</Text>
                </TouchableOpacity>)}


            </View>








        </View >
    );
}

export default PlayerSelection;