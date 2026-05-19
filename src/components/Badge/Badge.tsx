import './Badge.css'

export interface BadgeProps {
  label: string
  color?: 'purple' | 'green' | 'red' | 'gray'
}

export function Badge({ label, color = 'purple' }: BadgeProps) {
  return <span className={`badge badge--${color}`}>{label}</span>
}
