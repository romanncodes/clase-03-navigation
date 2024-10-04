import { View, Text } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";

function FavoritesScreen(){
    const favContext = useContext(FavoritesContext);

    //deberia haber una logica para obtener toda la info del id de meal

    return (
        <View>
            <Text>Favorites Meals</Text>

            {
                favContext.mealIds.length===0?
                    <Text>No Favorites Found</Text>
                :favContext.mealIds.map( (item)=><Text>{item}</Text> )
            }


        </View>
    )
}

export default FavoritesScreen;