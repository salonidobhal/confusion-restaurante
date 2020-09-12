import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
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

    return fetch(baseUrl + 'dishes')
    .then( response => response.json())
    .then( dishes => dispatch(addDishes(dishes)));


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

export const fetchComments = ()=> (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    return fetch(baseUrl + 'comments')
    .then( response => response.json())
    .then( comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = ()=> (dispatch) => { //thunk that returns a function used to call or dispatch several actions
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then( response => response.json())
    .then( promos => dispatch(addPromos(promos)));
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

