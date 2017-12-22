import {ADD_ORDER,DELETE_ORDER} from '../constants';

const order = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}


const removeById = (state = [], id) => {
    const orders = state.filter(order => order.id !== id);
    console.log('new reduced orders', orders);
    return orders;
}

const randomizer = (state = []) => {
    const orders = state.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    return orders;
}


const orders = (state = [], action) => {
    let orders = null

    switch (action.type) {
        case ADD_ORDER:
            orders = [...state, order(action)]
            console.log('orders as state', orders);
            return orders;
        case DELETE_ORDER:
            orders = removeById(state, action.id);
            console.log('orders as state', orders);
            return orders;
        default:
            return state;
    }

}

export default orders;  