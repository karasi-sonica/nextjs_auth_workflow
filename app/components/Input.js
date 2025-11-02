export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
