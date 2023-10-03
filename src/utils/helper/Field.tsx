import { WrappedFieldProps } from "redux-form";

interface IFieldProps {
  name: string;
  type: string;
  label?: string;
  required?: boolean;
  formGroup?: boolean;
  readOnly?: boolean;
  textColor?: string;
  iconFormGroup?: string;
  tabIndex?: string;
  ref?: React.RefObject<HTMLInputElement>;
  id?: string;
  minLength?: number;
  maxLength?: number;
  uppercase?: string;
  placeholder?: string;
  customeCss?: string;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent) => void;
  meta?: WrappedFieldProps;
}
const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  ref,
  customeCss,
  minLength,
  maxLength,
  uppercase,
  textColor = "text-black",
  formGroup,
  iconFormGroup,
  meta,
}: IFieldProps) => {
  const showError = meta?.meta?.touched && meta?.meta?.error;

  return (
    <div className="form-group">
      {label && (
        <label htmlFor="" className={textColor}>
          {label || <> &nbsp; </>}
        </label>
      )}
      <div className="input-group">
        <input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault(); //<===== This stops the form from being submitted
            } else {
              /* empty */
            }
          }}
          {...input}
          ref={ref}
          autoComplete="off"
          type={type}
          id={id}
          style={{ textTransform: uppercase ? "uppercase" : "none" }}
          className={`form-control ${showError && "is-invalid "} ${
            customeCss ? customeCss : ""
          } `}
          readOnly={readOnly}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {formGroup && (
          <div className="input-group-append">
            <div className="input-group-text">
              <span className={iconFormGroup}></span>
            </div>
          </div>
        )}
        {showError && (
          <span className="error invalid-feedback">{meta?.meta?.error}.</span>
        )}
      </div>
    </div>
  );
};

export default ReanderField;
