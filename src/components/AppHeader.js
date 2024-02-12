import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { colors, scaleFont, scale, verticalScale, fullWidth, constants } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const AppHeader = (props) => {

    const theme = useSelector(state => state.theme)
    return (
        <View style={{ width: fullWidth, height: verticalScale(48), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'center', }}>
            {
                !props.showicon ? (<TouchableOpacity style={{ width: scale(50), alignItems: 'center', height: verticalScale(48), justifyContent: 'center', }} >

                </TouchableOpacity>) : (<TouchableOpacity style={{ width: scale(50), alignItems: 'center', height: verticalScale(48), justifyContent: 'center', }} onPress={() => props.navigation()}>
                    <Icon
                        name="arrow-left"
                        size={verticalScale(26)}
                        color={theme.colors.text_primary}
                    />
                </TouchableOpacity>)
            }
            <Text
                style={{
                    color: theme.colors.text_primary,
                    fontFamily: constants.OPENSANS_FONT_BOLD,
                    fontSize: scaleFont(18),
                    letterSpacing: 0.15,
                }}
            >
                {props.heading}
            </Text>
        </View>

    );
}

export default AppHeader;

