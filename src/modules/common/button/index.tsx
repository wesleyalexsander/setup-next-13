import Spinner from '../icons/spinner'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ isLoading = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${props.className} flex items-center border-2 border-black p-2 text-sm tracking-wider text-white shadow-[0.125rem_0.125rem_#000] transition-shadow enabled:hover:shadow-none disabled:bg-zinc-500 disabled:text-zinc-600 md:text-base`}
    >
      {isLoading && <Spinner className="mr-3 h-5 w-5 animate-spin" />}
      {props.children}
    </button>
  )
}
