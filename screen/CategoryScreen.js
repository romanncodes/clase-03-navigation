
import { FlatList, View, Text } from "react-native";

import { CATEGORIES } from "../data/dummy";


function CategoryScreen(){

    function renderCategoryItem(obj){
        return (
            <View>
                <Text>{obj.item.title}</Text>
            </View>
        )
    }

    return <FlatList
            data={CATEGORIES}
            keyExtractor={ (item) =>  item.id}
            renderItem={renderCategoryItem}
    />
}

export default CategoryScreen;