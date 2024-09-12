import { useEffect, useState, useCallback } from "react";
import axios from "axios"; 
import User from "./User";

export default function AllUsers() {
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);

        const debounce = (func, delay) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => func(...args), delay);
        };
    };


    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
            console.log(response);
            setUsers(response.data.user);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

   
    const debouncedFetchUsers = useCallback(debounce(fetchUsers, 500), [filter]);

    useEffect(() => {
        debouncedFetchUsers(); 
    }, [filter, debouncedFetchUsers]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="flex flex-col ml-8 mt-16">
            <label htmlFor="username" className="text-3xl font-extrabold mb-8">Users</label>
            <input 
                type="text" 
                id="username" 
                name="box" 
                placeholder="Search Users..." 
                className="mr-8 h-12 shadow-slate-900 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-black placeholder:text-gray-450 placeholder:text-slate-500"
                autoComplete="off"
                value={filter}
                onChange={handleFilterChange}
            />
            {users.length > 0 ? (
                users.map(user => (
                    <User 
                        key={user.id} 
                        firstName={user.firstName} 
                        lastName={user.lastName} 
                        showButton={true} 
                    />
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}
