import { createContext, useState } from "react";


export const FavoritesContext=createContext({
    mealIds:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})


function FavoritesContextProvider({children}){

    const [ mealIds, setMealIds ] = useState([]);

    function addFavorite(id){
        setMealIds([...mealIds, id])
    }
    function removeFavorite(id){
        setMealIds( mealIds.filter((item)=>item!==id ))
    }

    const value={
        mealIds:mealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}
export default FavoritesContextProvider;




