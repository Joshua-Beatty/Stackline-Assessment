import type { ReactNode } from "react"

function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={"bg-white rounded-md shadow-md " + className || ""}>
      {children}
    </div>
  )
}
export default Card
