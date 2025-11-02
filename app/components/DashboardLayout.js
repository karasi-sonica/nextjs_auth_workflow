export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}
