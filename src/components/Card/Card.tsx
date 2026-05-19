import './Card.css'

export interface CardProps {
  title: string
  description: string
  footer?: string
}

export function Card({ title, description, footer }: CardProps) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  )
}
