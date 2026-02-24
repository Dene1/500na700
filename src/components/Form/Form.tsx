import styles from './_form.module.scss'
import {Button} from "@/components"
import {PatternFormat} from 'react-number-format'
import {validateName, validatePhone} from '@/utils'
import {useEffect, useRef, useState} from "react"

interface FormProps {
  onClose?: () => void
  isOpen?: boolean
}

export const Form = ({onClose, isOpen = true}: FormProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    mail: ''
  })
  const [nameError, setNameError] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string>('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [isOpen])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedName = formValues.name.trim()
    const nameValidationError = validateName(trimmedName)
    const phoneValidationError = validatePhone(formValues.phone)

    setNameError(nameValidationError)
    setPhoneError(phoneValidationError)

    if (nameValidationError || phoneValidationError) {
      return
    }

    const finalData = {...formValues, name: trimmedName}
    console.log('onSubmit', finalData)
    onClose?.()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  const handleChange = (field: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFormValues(prev => ({...prev, [field]: value}))

      if (field === 'name') {
        setNameError(validateName(value))
      }

      if (field === 'phone') {
        setPhoneError(validatePhone(value))
      }
    }

  if (!isOpen) return null

  return (
    <div className={styles.section}>
      <div
        className={styles.overlay}
        onClick={handleOverlayClick}
      ></div>

      <form className={styles.form}
            onSubmit={onSubmit}>
        <div className={styles.form__content}>
          <div className={styles.form__header}>
            <h2 className={styles.form__title}>Связаться с нами</h2>
            <Button
              icon='/arrows/cross.svg'
              iconAlt='Крестик'
              type='button'
              onClick={onClose}
            />
          </div>

          <div className={styles.form__inputs}>
            <div className={styles.inputWrapper}>
              {nameError && (
                <span className={styles.errorMessage}>{nameError}</span>
              )}
              <input
                className={`${styles.form__input} ${nameError ? styles.inputError : ''}`}
                placeholder='Имя'
                ref={nameInputRef}
                value={formValues.name}
                onChange={handleChange('name')}
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              {phoneError && (
                <span className={styles.errorMessage}>{phoneError}</span>
              )}
              <PatternFormat
                className={`${styles.form__input} ${phoneError ? styles.inputError : ''}`}
                placeholder={isFocused ? "+7 (___) ___-__-__" : "Введите номер"}
                type="tel"
                format="+7 (###) ###-##-##"
                mask="_"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={formValues.phone}
                onChange={(e) => handleChange('phone')(e)}
                required
              />
            </div>
            <input
              className={styles.form__input}
              placeholder='E-mail'
              value={formValues.mail}
              onChange={handleChange('mail')}
              type='email'
              required
            />
          </div>

          <div className={styles.form__checkbox}>
            <input
              className={styles.form__check}
              type='checkbox'
              id='personal-data'
              required
            />
            <span className={styles.checkbox}></span>
            <label className={styles.form__checkboxLabel}
                   htmlFor='personal-data'>
              Я согласен (-а) на обработку персональных данных
            </label>
          </div>

          <div className={styles.form__submit}>
            <Button
              content='Отправить'
              variant='blackFont'
              type='submit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}