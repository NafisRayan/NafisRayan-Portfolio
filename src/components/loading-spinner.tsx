import { Skeleton } from "@/components/ui/skeleton"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className = "", size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-primary border-t-transparent ${sizeClasses[size]} ${className}`} />
  )
}

interface LoadingCardProps {
  className?: string
}

export function LoadingCard({ className = "" }: LoadingCardProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
    </div>
  )
}

interface LoadingProjectProps {
  count?: number
}

export function LoadingProject({ count = 3 }: LoadingProjectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-14" />
          </div>
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}
