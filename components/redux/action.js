import { Add_to_cart } from "./constants";

export const AddtoCart=(item)=>{
    return{
        type: Add_to_cart,
        data:item
    }
}