
import { FlatList, View, Text } from "react-native";

import { CATEGORIES } from "../data/dummy";
import CategoryItem from "../components/CategoryItem";


function CategoryScreen(){

    function renderCategoryItem(obj){
        return <CategoryItem 
                    title={obj.item.title} 
                    color={obj.item.color}/>
    }

    return <FlatList
            data={CATEGORIES}
            keyExtractor={ (item) =>  item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
    />
}

export default CategoryScreen;