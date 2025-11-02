export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">LMS Project</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}
