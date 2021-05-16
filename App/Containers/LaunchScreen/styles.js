import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor
    },
    containerLinearGradient:{
        flex:1,
        backgroundColor: COLORS.WhiteColor
    },
    midView:{
        flex:1,
        justifyContent:'center'
    },
    imgBackgroundStyle:{
        width: Dimension.getWidth(70),
        height: Dimension.getHeight(35),
        alignSelf:'center',
    },
    textStyle:{
        position:'absolute',
        bottom:0,
        color: COLORS.WhiteColor,
        fontWeight:'bold',
        fontSize: Dimension.normalize(18),
        alignSelf:'flex-end',
        backgroundColor:'rgba(52, 52, 52, 0.8)'
    },   
    iconStyle:{
        width: 20,
        height: 20,
        position:'absolute',
        bottom:0,
        alignSelf:'flex-end',
        right: Dimension.getWidth(4)
    },
   
})

export default styles