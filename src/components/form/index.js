import React, { useState } from "react"
import styles from "./form.module.css"

const Form = ({ handleSubmit, handleUpdate }) => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={event => {
        setSubmitting(true)
        handleSubmit(event)
      }}
    >
      <p className={styles[`form__instructions`]}>
      Please login the following demo credentials:
        <br />
        <br /> email: <code>jay.gatsby@gmail.com</code>
        <br /> password: <code>pass</code>
      </p>
      <label className={styles[`form__label`]}>
        Email
        <input
          className={styles[`form__input`]}
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className={styles[`form__label`]}>
        Password
        <input
          className={styles[`form__input`]}
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className={styles[`form__button`]} type="submit" value={submitting ? "Logging in..." : "Log In"} disabled={submitting} />
    </form>
  )
}

export default Form