
interface InputProps {
        labelAttr?: string;
        typeAttr?: React.HTMLInputTypeAttribute;
        nameAttr?: string;
        placeholderAttr?: string;
        requiredAttr?: boolean;  
      }

const Input: React.FC<InputProps> = ({
        labelAttr,
        typeAttr = "text",
        nameAttr,
        placeholderAttr,
        requiredAttr = false,
}) => {
  return (
    <label className="form-controll">
        {labelAttr && (
                <div className="!px-4">
                        <span>{labelAttr}</span>
                </div>
        )}
        <div>
                <input type={typeAttr}
                name={nameAttr}
                placeholder={placeholderAttr}
                required={requiredAttr}
                className="block bg-slate-700  rounded-md placeholder:text-md placeholder:text-[#9b9c88] focus:ring-0 focus:border px-4 py-3 border"
                 />
        </div>
    </label>
  )
}

export default Input