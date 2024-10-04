import { StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton(props){
    return (
        <Pressable
            onPress={props.onPress}
        >
            <Ionicons name={props.name}
                      size={24} 
                      color={props.color} />
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({

})