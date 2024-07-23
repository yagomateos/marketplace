export const setFavourite = (what, product_id) => {
    if (typeof window !== 'undefined') {
        let favourites = localStorage.getItem('favouriteProducts');
        if (favourites) {
            favourites = JSON.parse(favourites);

            if (what === 'add') {
                if (favourites.indexOf(product_id) === -1) {
                    favourites.push(product_id);
                }
            } else {
                favourites = favourites.filter(id => id !== product_id);
            }

            localStorage.setItem('favouriteProducts', JSON.stringify(favourites));
        } else {
            if (what === 'add') {
                localStorage.setItem('favouriteProducts', JSON.stringify([product_id]));
            }
        }
    } else {
        console.error('Local storage is not available');
    }
};

export const getFavorites = (userId = null) => {
    if (typeof window !== 'undefined') {
        let favourites = localStorage.getItem('favouriteProducts');
        if (favourites) {
            favourites = JSON.parse(favourites);
            return favourites;
        } else {
            return [];
        }
    } else {
        console.error('Local storage is not available');
        return [];
    }
};
