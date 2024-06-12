export const setFavourite = (what , product_id)=>{
    let favourites = localStorage.getItem('favouriteProducts')
    if(favourites){
        favourites = JSON.parse(favourites)

        if(what=='add'){
            favourites.indexOf(product_id)==-1 && favourites.push(product_id) 
        }else{
            let remIndex = favourites.indexOf(product_id)
            let newFavs = favourites.filter(id => id !== product_id)
           console.log(newFavs)
           favourites = newFavs;
        }
        
        console.log(favourites)
        localStorage.setItem('favouriteProducts',JSON.stringify(favourites))
    }
}

export const getFavorites = (userId = null)=>{
    let favourites = localStorage.getItem('favouriteProducts')
    if(favourites){
        favourites = JSON.parse(favourites)
        return favourites;
    }else{
        throw new Error('no favourites')
    }
}