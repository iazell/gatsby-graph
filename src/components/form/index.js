import React, { useState } from "react"
import styles from "./form.module.css"

const Form = () => {
  const [submitting, setSubmitting] = useState(false)

  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={event => {
        setSubmitting(true)
      }}
    >
      <p className={styles[`form__instructions`]}>
        Please login the admin credentials:
        <br />
        <br /> username: <code>admin@admin.com</code>
        <br /> password: <code>admin</code>
      </p>
      <label className={styles[`form__label`]}>
        Username
        <input className={styles[`form__input`]} type="text" name="username" />
      </label>
      <label className={styles[`form__label`]}>
        Password
        <input
          className={styles[`form__input`]}
          type="password"
          name="password"
        />
      </label>
      <input
        className={styles[`form__button`]}
        type="submit"
        value={submitting ? "Logging in..." : "Log In"}
        disabled={submitting}
      />
    </form>
  )
}

export default Form
