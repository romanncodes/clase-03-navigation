import { View, Text, FlatList } from "react-native"
import { useRoute } from "@react-navigation/native"
import { MEALS } from "../data/dummy";

function MealScreen(){

    const route = useRoute();
    const id = route.params.categoryId

    const meals = MEALS.filter( (cat) =>  cat.categoryIds.includes(id))


    function renderMealItem(obj){
        return (
            <View>
                <Text>{obj.item.title}</Text>
            </View>
        )
    }


    return <FlatList
                data={meals}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
}

export default MealScreen