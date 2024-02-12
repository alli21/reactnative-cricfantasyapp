import React, { useState } from 'react';
import { Animated, View, Text, StatusBar, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, FlatList } from 'react-native';
import { colors, constants, scale, scaleFont, verticalScale } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';


const Settings = (props) => {

    const theme = useSelector(state => state.theme)

    const [expanded1, setexpanded1] = useState(false)
    const [expanded2, setexpanded2] = useState(false)
    const [expanded3, setexpanded3] = useState(false)
    const [lang, setlang] = useState("English (USA)")
    const [download, setdownload] = useState("Show Details")
    const [quality, setquality] = useState("YES")
    const [language, setlanguage] = useState([
        "Hindi", "English (USA)"
    ])
    const [downloads, setdownloads] = useState([
        "Show Details", "Hide My Details"
    ])
    const [downloadquality, setdownloadquality] = useState([
        "YES", "NO"
    ])

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleExpand1 = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setexpanded1(!expanded1)
    }

    const toggleExpand2 = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setexpanded2(!expanded2)
    }

    const toggleExpand3 = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setexpanded3(!expanded3)
    }


    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(365),
                    height: verticalScale(80),
                    alignSelf: 'center',
                }}>
                <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: scale(150), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Settings</Text>
                </View>
            </LinearGradient>


            <View style={{ width: scale(340), alignSelf: 'center', backgroundColor: theme.colors.background_primary, paddingVertical: verticalScale(20), paddingHorizontal: scale(10), borderRadius: verticalScale(6) }}>

                <Text style={{ fontSize: scaleFont(12), color: colors.secondary_blue, fontFamily: constants.OPENSANS_FONT_BOLD }}>Preferred App Language</Text>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', height: verticalScale(40), justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.background_primary, paddingEnd: scale(20) }} onPress={() => toggleExpand1()}>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, }}>{lang}</Text>
                    <FontAwesome name={expanded1 ? 'angle-up' : 'angle-down'} size={verticalScale(24)} color={colors.secondary_blue} />
                </TouchableOpacity>

                {
                    expanded1 ? (<Animated.View style={{ backgroundColor: theme.colors.background_primary, height: verticalScale(70) }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={language}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => { setlang(item), toggleExpand1() }} style={{ height: verticalScale(35), flexDirection: 'row', }}>
                                <Text style={{
                                    fontSize: scaleFont(14),
                                    color: theme.colors.text_primary,
                                }}>{item}</Text>
                            </TouchableOpacity>
                            }
                        />
                    </Animated.View>) : null

                }
                <View style={{ width: scale(340), height: verticalScale(0.5), marginBottom: verticalScale(10), backgroundColor: colors.greyColour, alignSelf: "center" }} />



                <Text style={{ fontSize: scaleFont(12), color: colors.secondary_blue, fontFamily: constants.OPENSANS_FONT_BOLD }}>Privacy Settings</Text>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', height: verticalScale(40), justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.background_primary, paddingEnd: scale(20) }} onPress={() => toggleExpand2()}>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, }}>{download}</Text>
                    <FontAwesome name={expanded2 ? 'angle-up' : 'angle-down'} size={verticalScale(24)} color={colors.secondary_blue} />
                </TouchableOpacity>

                {
                    expanded2 ? (<Animated.View style={{ backgroundColor: theme.colors.background_primary, height: verticalScale(70) }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={downloads}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => { setdownload(item), toggleExpand2() }} style={{ height: verticalScale(35), flexDirection: 'row', }}>
                                <Text style={{
                                    fontSize: scaleFont(14),
                                    color: theme.colors.text_primary,
                                }}>{item}</Text>
                            </TouchableOpacity>
                            }
                        />
                    </Animated.View>) : null

                }
                <View style={{ width: scale(340), height: verticalScale(0.5), marginBottom: verticalScale(10), backgroundColor: colors.greyColour, alignSelf: "center" }} />



                <Text style={{ fontSize: scaleFont(12), color: colors.secondary_blue, fontFamily: constants.OPENSANS_FONT_BOLD }}>Make Me Discoverable</Text>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', height: verticalScale(40), justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.background_primary, paddingEnd: scale(20) }} onPress={() => toggleExpand3()}>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, }}>{quality}</Text>
                    <FontAwesome name={expanded3 ? 'angle-up' : 'angle-down'} size={verticalScale(24)} color={colors.secondary_blue} />
                </TouchableOpacity>
                {
                    expanded3 ? (<Animated.View style={{ backgroundColor: theme.colors.background_primary, height: verticalScale(70) }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={downloadquality}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => { setquality(item), toggleExpand3() }} style={{ height: verticalScale(35), flexDirection: 'row', }}>
                                <Text style={{
                                    fontSize: scaleFont(14),
                                    color: theme.colors.text_primary,
                                }}>{item}</Text>
                            </TouchableOpacity>
                            }
                        />
                    </Animated.View>) : null

                }

                <View style={{ width: scale(340), height: verticalScale(0.5), marginBottom: verticalScale(10), backgroundColor: colors.greyColour, alignSelf: "center" }} />


            </View>


        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({


});