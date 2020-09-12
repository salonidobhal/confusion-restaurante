import * as ActionTypes from './ActionTypes';
//import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
export const addComment = (/*dishId, rating, author, */comment) => ({
    //returns a plain js object
    type: ActionTypes.ADD_COMMENT,
    payload: comment  ////after postComment method
    /*{
        dishId: dishId, //before postComment method
        rating: rating,  //before postComment method
        author: author,  //before postComment method
        comment: comment  //before postComment method
    }*/
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,  
        author: author,  
        comment: comment 

    }
    newComment.date = new Date().toISOString();

    return fetch( baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type' : 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch( error => {
            console.log('Post Comments : '+ error.message);
            alert("Your comment could not be posted\nError: "+ error.message);
        });
}

export const fetchDishes = () => (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {
            dispatch(dishesFailed(error.message))
        });


    /* setTimeout(()=> {dispatch(addDishes(DISHES)) //this was put in order to simulate the server. now this 
                                                     //is replced by actual communication            
 
     }, 2000);*/
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

export const fetchComments = () => (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => {
            dispatch(commentsFailed(error.message))
        });
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {
            dispatch(promosFailed(error.message))
        });
}

export const promosLoading = () => ({ // the three methods below return an object
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

