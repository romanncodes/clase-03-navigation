
import { Pressable, 
    StyleSheet,
    View , 
    Image,
    Text} from "react-native";


function MealItem(props){
    return(
        <View style={styles.container}>
            <Pressable 
                android_ripple={{color:'#cccccc'}}
                style={ ({pressed})=> pressed ? styles.pressableButton:null}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri:props.imageUrl}} 
                                style={styles.image}/>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style = {styles.detail}>
                        <Text style={styles.detailText}>{props.duration}m</Text>
                        <Text style={styles.detailText}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailText}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}


export default MealItem;


const styles = StyleSheet.create({
    image:{
        height:200,
        width:'100%'
    },
    container:{
        margin:16,
        borderRadius:8,
        elevation:4,
        shadowColor:'#000000',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:15},
        shadowRadius:8,

    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        color:'#434141',
        marginVertical:8
    },
    detail:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:8,
        gap:16,
        
    },
    detailText:{
        color:'grey'
    },
    pressableButton:{
        opacity:0.5
    }

})