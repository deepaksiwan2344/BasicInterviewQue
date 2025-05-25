import React, { useEffect, useState } from "react";

const UserListSearch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filterUser = users.filter((user) => {
    return user?.name?.toLowerCase().includes(debounceSearch.toLowerCase());
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search User list"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button style={{ cursor: "pointer" }}>submit</button>
      {filterUser?.length > 0
        ? filterUser.map((item, index) => {
            return <p key={index}>{item?.name} </p>;
          })
        : "No User"}
    </div>
  );
};

export default UserListSearch;
