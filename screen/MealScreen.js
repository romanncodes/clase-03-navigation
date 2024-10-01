import { View, Text, FlatList } from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { MEALS, CATEGORIES } from "../data/dummy";
import MealItem from "../components/MealItem";

function MealScreen(){

    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.categoryId

    const meals = MEALS.filter( (cat) =>  cat.categoryIds.includes(id))

    const catTitle = CATEGORIES.find((cat) => cat.id == id).title;

    navigation.setOptions({title:catTitle})

    function renderMealItem(obj){
        return <MealItem
                   title={obj.item.title}
                   imageUrl={obj.item.imageUrl} 
                   affordability={obj.item.affordability}
                   duration={obj.item.duration}
                   complexity={obj.item.complexity}
                />
    }


    return <FlatList
                data={meals}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
}

export default MealScreen