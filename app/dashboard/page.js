"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import DashboardLayout from "../components/DashboardLayout";

export default function DashboardPage() {
  return (
    <div>
      <Navbar />

      <DashboardLayout>
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>

        <div className="course-grid">
          <CourseCard title="Web Development 101" instructor="John Doe" />
          <CourseCard title="JavaScript Basics" instructor="Jane Smith" />
          <CourseCard title="Next.js Fundamentals" instructor="Mark Lee" />
        </div>
      </DashboardLayout>

      <Footer />
    </div>
  );
}
