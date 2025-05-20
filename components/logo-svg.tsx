import Link from "next/link"

interface LogoSVGProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function LogoSVG({ className, size = "md" }: LogoSVGProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <svg className={sizeClasses[size]} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background shape */}
        <rect x="2" y="10" width="196" height="30" rx="15" fill="white" />

        {/* Text */}
        <text
          x="10"
          y="33"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          fontSize="24"
          fill="hsl(221, 83%, 53%)"
        >
          task
        </text>
        <text x="60" y="33" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="24" fill="#1f2937">
          gen
        </text>
        <text
          x="105"
          y="33"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="hsl(221, 83%, 53%)"
        >
          .in
        </text>

        {/* Underline accent */}
        <rect x="60" y="38" width="30" height="3" rx="1.5" fill="hsl(221, 83%, 53%)" />
      </svg>
    </Link>
  )
}
