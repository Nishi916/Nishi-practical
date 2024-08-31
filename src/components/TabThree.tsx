import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TabThree: React.FC = () => {
    const [count, setCount] = React.useState<number | null>(null);
    const [message, setMessage] = React.useState<string[]>([]);
    const users = useSelector((state: RootState) => state.data.users);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value));
    };
  
    const handleSubmit = () => {
      if (count != null) {
        const printMessage = (n: number) => {
          if (n > 0) {
            setMessage((prev) => [...prev, 'Hello Task']);
            printMessage(n - 1);
          } else {
            setMessage((prev) => [...prev, 'STOP']);
          }
        };
        printMessage(count);
      }
    };
  
  return (
    <div className="container">
      <div className="form-group">
        <input type="number" className="form-control" onChange={handleChange} />
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="mt-3">
        {message.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <h3 className="mt-4">User Data:</h3>
      <ul className="list-unstyled">
        {users.map((user) => (
          <li key={user.id} className="d-flex align-items-center mb-3">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-circle"
              style={{ width: 50, height: 50, marginRight: "10px" }}
            />
            <div>
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabThree;
