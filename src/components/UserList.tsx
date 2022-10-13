import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

type Props = {};

export default function UserList({}: Props) {
  const { users, isLoading, error } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
