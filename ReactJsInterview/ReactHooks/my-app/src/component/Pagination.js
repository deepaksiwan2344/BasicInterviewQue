import React, { useEffect, useState, useMemo } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(users.length / usersPerPage),
    [users]
  );

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * usersPerPage;
    return users.slice(start, start + usersPerPage);
  }, [users, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p style={styles.center}>Loading...</p>;
  if (error) return <p style={{ ...styles.center, color: "red" }}>{error}</p>;

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>User List</h2>

      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.pagination}>
        <button
          style={styles.btn}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          style={styles.btn}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  wrapper: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  table: {
    margin: "0 auto",
    borderCollapse: "collapse",
    width: "80%",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  headerRow: {
    backgroundColor: "#f9f9f9",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
  },
  btn: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default App;
