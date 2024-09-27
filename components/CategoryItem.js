
import { StyleSheet, View, Text, Pressable } from "react-native";

function CategoryItem(props){
    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.onPress}
                android_ripple={{ color:'#cccccc' }}
                style={ ( {pressed} ) =>    [ styles.button, { backgroundColor:props.color }, pressed?styles.buttonPressed:null ]  } >
                <View style={styles.innerContainer}>
                    <Text> {props.title} </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryItem;

const styles= StyleSheet.create({
    container:{
        flex:1,
        height:150,
        backgroundColor:'#ffffff',
        borderRadius:8,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:15},
        shadowRadius:8,
        margin:16
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        flex:1,
        borderRadius:8
    },
    buttonPressed:{
        opacity:0.5
    }
})