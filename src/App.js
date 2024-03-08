import React, { useState } from "react";

const App = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registrationUsername, setRegistrationUsername] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(
      (user) => user.username === loginUsername && user.password === loginPassword
    );
    if (user) {
      setLoggedInUser(loginUsername);
      localStorage.setItem("user", JSON.stringify({ username: loginUsername }));
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (registrationUsername.trim() && registrationPassword.trim()) {
      setRegisteredUsers([...registeredUsers, { username: registrationUsername, password: registrationPassword }]);
      alert("Registration successful!");
      setRegistrationUsername(""); // Clear registration form fields after registration
      setRegistrationPassword("");
    } else {
      alert("Please provide both username and password");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div>
      {!loggedInUser ? (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <h2>Registration Page</h2>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              placeholder="Username"
              value={registrationUsername}
              onChange={(e) => setRegistrationUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={registrationPassword}
              onChange={(e) => setRegistrationPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {loggedInUser}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
