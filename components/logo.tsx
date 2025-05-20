import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <div className="relative flex items-center">
          <span className={`font-display font-bold ${sizeClasses[size]} text-blue-600`}>
            task<span className="text-gray-800">gen</span>
            <span className="text-blue-600 text-sm">.in</span>
          </span>
          <div className="absolute -bottom-1 right-7 w-6 h-1 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </Link>
  )
}
