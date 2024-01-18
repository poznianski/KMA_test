export interface TextProps {
  text: string
  weight?:
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | 'font-extrabold'
  size?: 'text-xs' | 'text-sm' | 'text-base' | 'text-2xl'
  color?:
    | 'text-primary'
    | 'text-primaryLight'
    | 'text-textSecondary'
    | 'text-textPrimary'
  className?: string
}
