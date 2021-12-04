import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value.trim() !== '')

  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().match(pattern))

  let formIsValid = false
  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!enteredFNameIsValid || !enteredLNameIsValid || !enteredEmailIsValid) {
      return
    }
    resetFNameInput()
    resetLNameInput()
    resetEmailInput()
  }

  const fnameClasses = fnameHasError ? 'form-control invalid' : 'form-control'
  const lnameClasses = fnameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
            value={enteredFName}
          />
          {fnameHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            value={enteredLName}
          />
          {lnameHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
