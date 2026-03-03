type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
};

export default function Card({
  children,
  className = "",
  highlighted = false,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        highlighted
          ? "bg-white border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
          : "bg-white border border-gray-100 shadow-md hover:shadow-lg"
      } ${className}`}
    >
      {children}
    </div>
  );
}
