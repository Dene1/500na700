export const validateName = (name) => {
  const trimmedName = name.trim()
  if (trimmedName.length === 0 && name.length > 0) {
    return "Поле не может состоять только из пробелов"
  }
  if (trimmedName.length === 0) {
    return "Поле обязательно для заполнения"
  }
  return ""
}