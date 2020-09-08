import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore=()=>{
    const store = createStore(
    //Reducer,            //parameters to createStore
       // initialState        // "before dividing into 4 reducers

       combineReducers({
           dishes: Dishes,
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders
       })
    );

    return store;
}