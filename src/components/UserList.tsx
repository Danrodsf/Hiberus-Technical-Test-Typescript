import { useState } from "react";
import { Iuser } from "../interfaces/interfaces";
import UserModal from "./UserModal";

const UserList = ({
  users,
  setRender,
}: {
  users: Iuser[];
  setRender: Function;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>();

  return (
    <>
      {users?.map((user: Iuser) => (
        <div key={user.id} className='list-group mb-4'>
          <div
            className='list-group-item list-group-item-action flex-fill'
            onClick={() => {
              setShowModal(true);
              setUserId(user.id);
            }}
          >
            {user.name}
          </div>
        </div>
      ))}
      {showModal && (
        <UserModal
          userId={userId!}
          closeModal={setShowModal}
          setRender={setRender}
        />
      )}
    </>
  );
};

export default UserList;
