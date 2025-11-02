export default function Button({ label, type = "button" }) {
  return (
    <button
      type={type}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
    >
      {label}
    </button>
  );
}
