import { ApiGetUserBoards } from "../components/Login/API"

const SET_USER_BOARDS = 'SET_USER_BOARDS'

let initialState = {
    boards: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_BOARDS:
            return {
                ...state,
                boards: action.boards
            }

        default:
            return state
    }
}

export const setUserBoards = (boards) => ({ type: SET_USER_BOARDS, boards })

//=====thunks=======
export const getBoards = (userId) => async (dispatch) => {
    const data = await ApiGetUserBoards(userId)
            dispatch(setUserBoards(data))
}

export default profileReducer