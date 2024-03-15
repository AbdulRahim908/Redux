import { Add_to_cart } from "./constants";
const initialstate = [];
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case Add_to_cart:
            return [
                ...state,
                action.data

            ]
        default:
            return state

    }

}