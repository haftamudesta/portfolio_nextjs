
interface TextAreaProps {
        labelAttr?: string;
        typeAttr?: React.HTMLInputTypeAttribute;
        nameAttr?: string;
        placeholderAttr?: string;
        requiredAttr?: boolean;
        colsAttr?:number;
        rowsAttr?:number;
        className?: string;
      }

const TextArea: React.FC<TextAreaProps> = ({
        labelAttr,
        nameAttr,     
        placeholderAttr,
        requiredAttr = false,
        colsAttr,
        rowsAttr,
        className = "",
}) => {
  return (
    <label className="form-controll">
        {labelAttr && (
                <div className="!px-4">
                        <span>{labelAttr}</span>
                </div>
        )}
        <div>
                <textarea 
                name={nameAttr}
                placeholder={placeholderAttr}
                required={requiredAttr}
                cols={colsAttr}
                rows={rowsAttr}
                className={`block bg-linear-0=45 from-indigo-500 to-indigo-700  rounded-md placeholder:text-md placeholder:text-[#9b9c88] placeholder:text-center focus:ring-0 focus:border px-4 py-3 border mt-2 md:ml-4 ${className}`}
                 />
        </div>
    </label>
  )
}

export default TextArea