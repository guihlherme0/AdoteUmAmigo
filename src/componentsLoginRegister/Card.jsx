export function Card({ className = "", children }) {
  return (
    <div
      className={`
        bg-white/90 
        backdrop-blur-md 
        rounded-2xl 
        p-8
        shadow-2xl shadow-black/40
        border border-white/40 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-6">{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
      {children}
    </h2>
  );
}

export function CardDescription({ children }) {
  return <p className="text-gray-500 text-sm mt-1">{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`mt-6 ${className}`}>{children}</div>;
}
