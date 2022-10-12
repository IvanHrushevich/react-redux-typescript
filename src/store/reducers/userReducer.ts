import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        isLoading: true,
        error: null,
        users: [],
      };

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        users: action.payload,
      };

    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        isLoading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};
