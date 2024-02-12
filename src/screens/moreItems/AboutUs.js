import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scaleFont, verticalScale, scale, colors, constants } from "../../utils";
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.background_primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{ width: scale(365), height: verticalScale(80), alignSelf: 'center', }}>
                <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: scale(140), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>About Us</Text>
                </View>
            </LinearGradient>


            <View style={{ justifyContent: 'center', width: scale(320), alignSelf: 'center', flex: 1, }}>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>

                    <View style={{ alignSelf: 'center', paddingVertical: verticalScale(40) }}>
                        <FontAwesome5
                            name="trophy"
                            size={verticalScale(120)}
                            color={colors.primary_blue}
                        />
                    </View>

                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, textAlign: "justify" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), marginBottom: verticalScale(30), textAlign: "justify" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </ScrollView>
            </View>


        </View>
    );
}

export default AboutUs;