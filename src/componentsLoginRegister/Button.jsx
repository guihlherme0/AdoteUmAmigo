export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 transition cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
