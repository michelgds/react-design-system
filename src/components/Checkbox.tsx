import * as CheckboxPromitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPromitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPromitive.Root 
      className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}
    >
      <CheckboxPromitive.Indicator asChild>
        <Check weight='bold' className='h5 w-5 text-cyan-500'/>
      </CheckboxPromitive.Indicator>
    </CheckboxPromitive.Root>
  )
}