import React from 'react'
type Option = {
    value: string,
    label: string,
}
type Props = {
    options: Option[],
    selectProps : React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
}

function CustomSelect({options, selectProps}: Props) {
  return (
    <select {...selectProps} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-950 focus:border-gray-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${selectProps.className}`}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
  )
}

export default CustomSelect