export default function CourseCard({ title, instructor }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
    </div>
  );
}
