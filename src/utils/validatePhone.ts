export const validatePhone = (phone: string) => {
  const digitsOnly = phone.replace(/\D/g, "")

  if (digitsOnly.length === 0) return "Поле обязательно"
  if (digitsOnly.length < 11) return "Введите полный номер телефона"
  if (digitsOnly.length > 11) return "Некорректный номер"

  if (!digitsOnly.startsWith("7")) return "Номер должен начинаться с 7"

  return ""
}