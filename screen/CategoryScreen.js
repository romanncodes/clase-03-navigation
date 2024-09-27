
import { FlatList, View, Text } from "react-native";

import { CATEGORIES } from "../data/dummy";
import CategoryItem from "../components/CategoryItem";

import { useNavigation } from "@react-navigation/native";

function CategoryScreen(){

    const navigation = useNavigation();
    function renderCategoryItem(obj){

    

        function onPressHandler(){
            navigation.navigate('Meals', {categoryId: obj.item.id});
        }

        return <CategoryItem 
                    title={obj.item.title} 
                    color={obj.item.color}
                    onPress={onPressHandler}/>
    }

    return <FlatList
            data={CATEGORIES}
            keyExtractor={ (item) =>  item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
    />
}

export default CategoryScreen;