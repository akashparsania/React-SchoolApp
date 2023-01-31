import { init } from "../utilitis/init"
export const appReducer = (state = init, action) => {

    switch (action.type) {
        case 'LOADER':
            state = {
                ...state,
                isShowLodder: action.payload
            }

            break;

        case 'AUT':
            state = {
                ...state,
                isLoggedIn: action.payload
            }
            break;
    }
    return state;
}