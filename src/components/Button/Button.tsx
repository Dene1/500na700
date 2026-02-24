import styles from './_button.module.scss'

type Variant =
  | "blackFont"
  | "whiteFont"
  | "void"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  className?: string
  onClick?: () => void
  icon?: string
  iconAlt?: string
}

const variantClasses: Record<Variant, string> = {
  blackFont: styles.blackFont,
  whiteFont: styles.whiteFont,
  void: styles.void
}

export const Button = ({
                         onClick,
                         content,
                         className = "",
                         variant = "void",
                         icon,
                         iconAlt = "",
                         ...props
                       }: ButtonProps) => {
  const variantClass = variantClasses[variant] || styles.whiteFont

  const commonProps = {
    className: `${styles.button} ${variantClass} ${className}`,
    onClick,
    ...props,
  }

  return (
    <button {...commonProps}>
      {icon && <img src={icon}
                    alt={iconAlt}
                    className={styles.button__icon} />}
      {content}
    </button>
  )
}