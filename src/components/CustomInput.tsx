type CustomInputProps = {
    label?: string,
    className?: string,
    inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    error?: string
}

export default function CustomInput({ label, inputProps, className, error }: CustomInputProps) {
    return (
        <div className={`flex flex-col w-full text-2xl ${className} text-gray-950`}>
            {label && <label htmlFor={inputProps.name}>{label}</label>}
            <input {...inputProps} className={`border-b-2 bg-transparent outline-none mt-2 py-2 ${inputProps.className} ${error ? "border-red-500" : "border-gray-900"}`} />
            {error && <p className="text-red-500 text-sm font-medium mt-1">{error}</p>}
        </div>
    )
}
