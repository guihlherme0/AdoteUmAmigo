export function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-600">{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
