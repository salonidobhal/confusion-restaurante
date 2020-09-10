import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) =>({
    //returns a plain js object
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId : dishId,
        rating :rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = ()=> (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    dispatch(dishesLoading(true));
    setTimeout(()=> {dispatch(addDishes(DISHES))

    }, 2000);
}

export const dishesLoading = () => ({ // the three methods below return an object
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});