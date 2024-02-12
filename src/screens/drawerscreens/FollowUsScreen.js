import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, Keyboard } from 'react-native';
import { colors, scale, scaleFont, verticalScale, constants } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FollowUsScreen = (props) => {

    const [name, setName] = useState('Daya Chitanis')
    const [email, setEmail] = useState('chitadata23@hotmail.com')
    const [message, setMessage] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s')


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity activeOpacity={1} style={{ flex: 1, }} onPress={() => Keyboard.dismiss()}  >
                <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />
                <ScrollView>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                        colors={[colors.secondary_blue, colors.primary_blue]}
                        style={{
                            width: scale(360),
                            height: verticalScale(240),
                            alignSelf: 'center',
                        }}><View style={{ justifyContent: "center", paddingTop: verticalScale(40) }}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginLeft: scale(20) }}>
                                <MaterialCommunityIcons
                                    name="arrow-left"
                                    size={verticalScale(26)}
                                    color={colors.white}
                                />
                            </TouchableOpacity>
                            <Image style={{ height: verticalScale(220), width: scale(250), alignSelf: "center", position: "absolute", top: verticalScale(45) }} source={require("../../assets/images/bike.png")} />
                        </View>
                    </LinearGradient>

                    <View style={{ backgroundColor: colors.white, width: scale(300), height: verticalScale(350), borderRadius: verticalScale(12), alignSelf: "center", elevation: 10, marginTop: verticalScale(-30), padding: verticalScale(10) }}>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), textAlign: "center" }}>GET IN TOUCH!</Text>

                        <TextInput
                            style={{ backgroundColor: colors.white, marginVertical: verticalScale(10) }}
                            label="Name"
                            value={name}
                            activeUnderlineColor={colors.secondary_blue}
                            onChangeText={(text) => setName(text)}
                        />

                        <TextInput
                            style={{ backgroundColor: colors.white, }}
                            label="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            activeUnderlineColor={colors.secondary_blue}
                        />

                        <TextInput
                            style={{ backgroundColor: colors.white, marginVertical: verticalScale(10) }}
                            label="Message"
                            value={message}
                            multiline={true}
                            onChangeText={(text) => setMessage(text)}
                            activeUnderlineColor={colors.secondary_blue}
                        />

                        <TouchableOpacity style={{ backgroundColor: colors.secondary_blue, borderRadius: verticalScale(30), width: scale(40), height: scale(40), justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: verticalScale(10) }}>
                            <FontAwesome name="send" color={colors.white} size={verticalScale(18)} />
                        </TouchableOpacity>
                    </View>


                    <View>
                        <Text style={{ color: colors.black, textAlign: "center", marginTop: verticalScale(30) }}>Follow us on</Text>


                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: verticalScale(10) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: scale(150), marginTop: verticalScale(10) }}>
                                <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../../assets/images/wsicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../../assets/images/tgicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />

                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../../assets/images/igicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />
                                </TouchableOpacity>

                            </View>
                        </View>



                    </View>



                </ScrollView>
            </TouchableOpacity>
        </View>
    );
}

export default FollowUsScreen;