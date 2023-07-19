type FormFieldProps = {
  type?: string;
  title: string;
  state: string;
  setState: (value: string) => void;
  placeholder: string;
  isTextArea?: boolean;
};

const FormField = ({
  type,
  title,
  state,
  setState,
  placeholder,
  isTextArea,
}: FormFieldProps) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          required
          value={state}
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          required
          value={state}
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
