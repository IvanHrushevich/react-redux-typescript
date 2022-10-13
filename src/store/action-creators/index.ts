import * as TodoActionCreators from "./todo";
import * as UserActionCreators from "./user";

const actionCreators = {
  ...TodoActionCreators,
  ...UserActionCreators,
};

export default actionCreators;
