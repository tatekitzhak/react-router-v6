import { combineReducers } from 'redux';
import { incReducer } from '@/store/reducers/typsCounters/incReducer.js';
import { decReducer } from '@/store/reducers/typsCounters/decReducer.js';


const initState = {
    posts: [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        }
    ]
};

// The reducer updates the count
const initialCount = {
    count: 0
};

// export const rootReducer = (state = initState, action) => {
//     return state;
// }

// export const counterReducer = (state = initialCount, action) => {
    
//     switch (action.type) {
//         case "INC":
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case "DEC":
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         case "RESET":
//             return {
//                 ...state,
//                 count: 0
//             };
//         default:
//             return state;
//     }

// }


export const rootReducer = combineReducers({
    increment: incReducer,
    decrement: decReducer,
});