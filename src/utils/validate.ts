export const isPhoneNumber = (phone: string) => {
  const reg = /^(1\d{10})$/
  return reg.test(phone)
}
