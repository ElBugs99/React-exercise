import "./secondPart.css";
import TableCell from "./table/TableCell";

const SecondPart = ({ userList, deleteUser, changeUserList }) => {

  const listLog = () => console.log(userList);

  return (
    <div className="secondpart">
      Table
      <div></div>
      {userList.map((x, i) => (
        <TableCell
          key={i}
          id={x.id}
          name={x.name}
          comment={x.comment}
          deleteUser={deleteUser}
          changeUserList={changeUserList}
        />
      ))}
      <button onClick={listLog}>SHow List</button>
    </div>
  );
};

export default SecondPart;
