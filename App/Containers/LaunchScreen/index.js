import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import { COLORS } from '../../Utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { ICONS, IMAGES } from '../../Utils/Images';

export default class LaunchScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.WhiteColor, COLORS.WhiteColor, COLORS.PrimaryColor,]}
                    style={styles.containerLinearGradient}>


                    <View style={styles.midView}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ApprovedFoodList')}>
                            <ImageBackground source={IMAGES.foodImg} style={styles.imgBackgroundStyle}>
                                <Text style={styles.textStyle}>View Approved {'\n'} Food List</Text>
                                <Image source={ICONS.RightArrow} style={styles.iconStyle} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>

            </View>
        )
    }

}