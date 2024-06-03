import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../Redux/userSlice";
import { Link } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
const users = useSelector((state) => state.users.users);
  //console.log(users);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-user");
      dispatch(getUser(response.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(id)=>{
try {
    const response = await axios.delete(`http://localhost:5000/api/delete-user/${id}`)
    dispatch(deleteUser({id}))
} catch (error) {
    console.log(error);
}
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-dark rounded p-3">
        <Link to ='/create' className="btn btn-success btn-sm mb-2">Create User</Link> 
          <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((ele) => (
                    <tr key={ele.id}>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.age}</td>
                        <td>
                             <Link to ={`/edit/${ele.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                            <button onClick={()=>handleDelete(ele.id)} className="btn btn-danger btn-sm">Delete</button>
                           
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Users;
