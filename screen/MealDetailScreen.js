
import { useLayoutEffect, useContext} from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";

function MealDetailScreen(){
    const favContext = useContext(FavoritesContext);
    
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.mealId;

    const meal = MEALS.find( (item) =>item.id === id )

    const mealIsFavorite = favContext.mealIds.includes(id);

    function buttonMealHandler(){
        if(mealIsFavorite){
            favContext.removeFavorite(id)
        }else{
            favContext.addFavorite(id)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><IconButton
                                name={mealIsFavorite?'star':'star-outline'}
                                color='#fff'
                                onPress={buttonMealHandler}
                            />
        })
    }, [navigation, buttonMealHandler])



    return (
        <ScrollView>
            <Image source={{uri:meal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}> {meal.title}</Text>
            <View style={styles.innerContainer}>
                
                <SubTitle text={'Ingredients'} />

                <List list={meal.ingredients} />
               
               <SubTitle text={'Steps'} />

                <List list={meal.steps} />

                <SubTitle text={'Meal Type'} />
                
                {meal.isGlutenFree?<Text>Gluten Free</Text>:null}
                {meal.isLactoseFree?<Text>Lactose Free</Text>:null}
                {meal.isVegan?<Text>Vegan</Text>:null}
                {meal.isVegetarian?<Text>Vegetarian</Text>:null}
            </View>

        </ScrollView>
    );
}


export default MealDetailScreen;

const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center',
        margin:8
    },
    innerContainer:{
        marginHorizontal:24
    },
    
})