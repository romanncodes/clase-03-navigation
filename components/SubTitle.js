import { View, Text, StyleSheet } from "react-native";

function SubTitle(props){
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default SubTitle;


const styles=StyleSheet.create({
    subTitleContainer:{
        marginVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    text:{
        color:'#484747',
        fontWeight:'bold'
    }
})