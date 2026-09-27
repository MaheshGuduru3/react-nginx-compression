import { useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  location: string;
  description: string;
}

const departments = [
  "Engineering",
  "Marketing",
  "Finance",
  "Human Resources",
  "Sales",
  "Operations",
];

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Product Manager",
  "UI Developer",
];

const locations = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Mumbai",
  "Pune",
  "Delhi",
];

const users: User[] = Array.from({ length: 20000 }, (_, index) => ({
  id: index + 1,

  name: `User ${index + 1}`,

  email: `user${index + 1}@example.com`,

  department: departments[index % departments.length],

  role: roles[index % roles.length],

  location: locations[index % locations.length],

  description:
    "This is a sample employee description used to demonstrate " +
    "React production builds, JavaScript minification, Nginx HTTP " +
    "compression, Gzip compression, browser network transfer sizes, " +
    "and frontend performance optimization.",
}));

function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    const searchValue = search.toLowerCase();

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.department.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue) ||
        user.location.toLowerCase().includes(searchValue),
    );
  }, [search]);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>React + Nginx Compression Demo</h1>

          <p>
            Production build + Nginx + Gzip compression
          </p>
        </div>
      </header>

      <main className="container">
        <section className="info-card">
          <h2>Compression Experiment</h2>

          <p>
            This application contains a large amount of repeated data so
            that you can observe the difference between an uncompressed
            production bundle and a Gzip-compressed response.
          </p>

          <div className="pipeline">
            <span>React</span>
            <span>→</span>
            <span>Vite Build</span>
            <span>→</span>
            <span>Minification</span>
            <span>→</span>
            <span>Nginx</span>
            <span>→</span>
            <span>Gzip</span>
            <span>→</span>
            <span>Browser</span>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span>Total Users</span>
            <strong>{users.length.toLocaleString()}</strong>
          </div>

          <div className="stat-card">
            <span>Filtered Users</span>
            <strong>{filteredUsers.length.toLocaleString()}</strong>
          </div>

          <div className="stat-card">
            <span>Technology</span>
            <strong>React + TS</strong>
          </div>

          <div className="stat-card">
            <span>Server</span>
            <strong>Nginx</strong>
          </div>
        </section>

        <section className="users-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="users">
            {filteredUsers.slice(0, 100).map((user) => (
              <article className="user-card" key={user.id}>
                <div className="avatar">
                  {user.name.charAt(5)}
                </div>

                <div className="user-info">
                  <h3>{user.name}</h3>

                  <p>{user.email}</p>

                  <div className="details">
                    <span>{user.role}</span>
                    <span>{user.department}</span>
                    <span>{user.location}</span>
                  </div>

                  <p className="description">
                    {user.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;