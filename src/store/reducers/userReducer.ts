interface UserState {
  users: any[];
  isLoading: boolean;
  error: string | null;
}

interface UserAction {
  type: string;
  payload: any;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        isLoading: true,
        error: null,
        users: [],
      };

    case FETCH_USERS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        users: [action.payload],
      };

    case FETCH_USERS_ERROR:
      return {
        isLoading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};
