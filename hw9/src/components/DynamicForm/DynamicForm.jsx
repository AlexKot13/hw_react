import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

const DynamicForm = () => {

  const{
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {}

  const firstName = watch('firstName')

  const isFirstNameValid = firstName && firstName.length >= 3

  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>Dynamic Form</h1>
      <div>
        <label htmlFor='firstName'></label>
        <input id='firstName' placeholder='Name'
        {...register('firstName', {
          required: 'Required field',
          minLength: {
            value: 3,
            message: 'Min 3 simbols'
          }
        })}
        />

        {errors.firstName && (
         <p className={styles.error}>{errors.firstName.message}</p>
        )}
      </div> 

      <br />

        {isFirstNameValid && (
          <div>
            <label htmlFor='lastName'></label>
            <input id='lastName' placeholder='Last name'
            {...register('lastName', {
              required: 'Required field'
            })}
            />

            {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
            )}   
          </div>
        )}

        <button type='submit' className={styles.submitButton}>
          Send
        </button>

    </form>
  )
}

export default DynamicForm
