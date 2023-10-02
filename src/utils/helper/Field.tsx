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
  ref?: any;
  id?: string;
  minLength?: number;
  maxLength?: number;
  uppercase?: string;
  placeholder?: string;
  customeCss?: string;
  input?: any;
  onChange?: () => void;
  onBlur?: () => void;
  meta?: any;
}
const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
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
  const showError = meta.touched && meta.error;

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
          tabIndex={tabIndex}
          ref={ref}
          autoComplete="off"
          type={type}
          id={id}
          style={{ textTransform: uppercase ? "uppercase" : "none" }}
          className={`form-control ${showError && "is-invalid "} ${
            customeCss || ""
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
          <span className="error invalid-feedback">{meta.error}.</span>
        )}
      </div>
    </div>
  );
};

export default ReanderField;
