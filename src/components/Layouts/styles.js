import { StyleSheet } from "react-native";
import { SIZES } from "../../theme";

 const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:20
    },

    image:{
        justifyContent: 'center',
    },
    containerABS:{
        backgroundColor: "#F0987D",
        alignSelf:'center',
        flex:1
    },
    headerTitle:{
        fontSize:24,
        fontWeight:'700',
        color:"#fff",
        width:'70%'
    },
    ImageBackground: {
        // ...StyleSheet.absoluteFillObject,
        width: SIZES.width,
        height:"100%",
        zIndex:-1
      },
});

export default styles