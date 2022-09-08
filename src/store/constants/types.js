export const ACTION_INCREMENT = "ACTION_INCREMENT"
export const ACTION_DECREMENT = "ACTION_DECREMENT"

export const ADD_PROFILE = "ADD_PROFILE"

//Product app
export const product = {
    CHANGE_USER_EMAIL: "CHANGE_USER_EMAIL",
    ADD_PRODUCT: "ADD_PRODUCT"
}

// Comments
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENT__MARK_FAVORITE = 'COMMENT__MARK_FAVORITE';

export const app = {
    ERROR: 'letters-social/app/error',
    LOADED: 'letters-social/app/loaded',
    LOADING: 'letters-social/app/loading'
};

export const auth = {
    LOGIN_SUCCESS: 'letters-social/auth/login/success',
    LOGOUT_SUCCESS: 'letters-social/auth/logout/success'
};

export const posts = {
    CREATE: 'letters-social/post/create',
    GET: 'letters-social/post/get',
    LIKE: 'letters-social/post/like',
    NEXT: 'letters-social/post/paginate/next',
    UNLIKE: 'letters-social/post/unlike',
    UPDATE_LINKS: 'letters-social/post/paginate/update'
};

export const comments = {
    CREATE: 'letters-social/comments/create',
    GET: 'letters-social/comments/get',
    SHOW: 'letters-social/comments/show',
    TOGGLE: 'letters-social/comments/toggle'
};