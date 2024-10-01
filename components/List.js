import { StyleSheet, View, Text } from "react-native";

function List(props) {
    return (
        <View>
            {
                props.list.map((text) => (
                    <Text style={styles.text} key={text}>{text}</Text>
                ))
            }
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    text:{
        marginVertical:2
    }
})