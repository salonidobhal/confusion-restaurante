import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore=()=>{
    const store = createStore(
    //Reducer,            //parameters to createStore
       // initialState        // "before dividing into 4 reducers

       combineReducers({
           dishes: Dishes,
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders,
           ...createForms({ // this will add in all the necessary reducer functions and state info into the createStore
               feedback: InitialFeedback //React-Redux-Form brings in its own set of support for all these on our behalf,
                                         // so we don't need to write our own reducers or our action creators and so on, 
                                         //React-Redux-Form fills in all the details by itself.
           })
       }),
       applyMiddleware(thunk, logger)
    );

    return store;
}