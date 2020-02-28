import { cityActions } from "../actions";

export function city(state = {}, action){
    switch(action.city){
        case cityActions.cityList: {
            return{
                type: action.cityList,
                message: action.data
            };
        }
        default: 
            return state;
    }
}