import { View, Text } from "react-native"
import { useRoute } from "@react-navigation/native"
import { MEALS } from "../data/dummy";

function MealScreen(){

    const route = useRoute();
    const id = route.params.categoryId

    const meals = MEALS.filter( (cat) =>  cat.categoryIds.includes(id))


    return (
        <View>
            <Text>Meal - {id}</Text>
        </View>
    )
}

export default MealScreen