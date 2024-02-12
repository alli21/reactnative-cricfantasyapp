import React, { useState } from 'react';
import { View, StyleSheetm, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors, fullHeight, fullWidth, scale, scaleFont, verticalScale, constants } from '../utils';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const slides = [
    {
        key: 1,
        title: 'Play Anytime !',
        text: 'Description. Say something cool, This is a cool description',
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Play Excluive Contests',
        text: 'Description. Say something cool, This is a cool description',
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Easy Payout Methods',
        text: 'I\'m already out of descriptions Lorem ipsum bla bla bla',
        backgroundColor: '#22bcb5',
    }
];


const OnboardingStories = (props) => {

    const [showRealApp, setshowRealApp] = useState(false)

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: colors.black }}>
                <SafeAreaView />
                <StatusBar barStyle={"light-content"} backgroundColor={colors.black} hidden={false} translucent={false}
                />
                <View style={{ marginTop: verticalScale(200), justifyContent: 'center', alignItems: 'center' }}>
                    {
                        item.key === 1 ?
                            <MaterialIcons name="sports-soccer" color={colors.green} size={verticalScale(180)} />
                            :
                            item.key === 2 ?
                                <MaterialIcons name="sports-kabaddi" color={colors.green} size={verticalScale(180)} />
                                :
                                <MaterialIcons name="sports-tennis" color={colors.green} size={verticalScale(180)} />
                    }
                    <Text style={{ color: colors.green, fontSize: scaleFont(24), fontFamily: constants.OPENSANS_FONT_BOLD, alignSelf: "center", marginTop: verticalScale(10) }}>{item.title}</Text>
                    <Text style={{ color: colors.white, fontSize: scaleFont(14), width: scale(260), alignSelf: 'center', fontFamily: constants.OPENSANS_FONT_MEDIUM, textAlign: 'center', marginTop: verticalScale(10) }}>{item.text}</Text>


                </View>
            </View>
        );
    }

    const onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state

        props.navigation.navigate("LoginScreen")
        setshowRealApp(true)
    }



    return <AppIntroSlider
        renderItem={(item) => renderItem(item)}
        data={slides}
        onDone={() => onDone()}
        dotStyle={{ backgroundColor: "white" }}
        activeDotStyle={{ backgroundColor: "green" }}
        showSkipButton={true}
        onSkip={() => props.navigation.navigate("LoginScreen")}
    />

}

export default OnboardingStories;

