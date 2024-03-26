import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

type PersonalData = {
  firstName: string
  lastName: string
  mobile: string
  email: string
  monthlyIncome: number
}

type Validation = {
  msg: string
  error: boolean
}

const VALIDATION_INIT = {
  firstName: { error: false, msg: '' },
  lastName: { error: false, msg: '' },
  mobile: { error: false, msg: '' },
  email: { error: false, msg: '' },
  monthlyIncome: { error: false, msg: '' }
}

const FORM_INIT = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  monthlyIncome: 0
}

export const useLoanStore = defineStore('loan', () => {
  const router = useRouter()

  const formData = ref<PersonalData>(FORM_INIT)

  const validation = ref<{ [key: string]: Validation }>(VALIDATION_INIT)

  const validate = () => {
    const firstNameIsValid = formData.value.firstName !== ''
    const lastNameIsValid = formData.value.lastName !== ''
    const regexMobile = new RegExp(/^[5]{2}[0-9]{5,6}$/g)
    const mobileIsValid = regexMobile.test(formData.value.mobile)
    const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const emailIsValid = regexEmail.test(formData.value.email)
    const monthlyIncomeIsValid = formData.value.monthlyIncome > 100

    if (
      !firstNameIsValid ||
      !lastNameIsValid ||
      !mobileIsValid ||
      !emailIsValid ||
      !monthlyIncomeIsValid
    ) {
      validation.value = {
        firstName: { error: !firstNameIsValid, msg: 'Field cannot be empty' },
        lastName: { error: !lastNameIsValid, msg: 'Field cannot be empty' },
        mobile: { error: !mobileIsValid, msg: 'Number has to start with 55, length 7-8 numbers' },
        email: { error: !emailIsValid, msg: 'Enter correct email' },
        monthlyIncome: { error: !monthlyIncomeIsValid, msg: 'Income has to be more than 100€' }
      }

      return false
    } else {
      validation.value = {
        firstName: { error: firstNameIsValid, msg: '' },
        lastName: { error: lastNameIsValid, msg: '' },
        mobile: { error: mobileIsValid, msg: '' },
        email: { error: emailIsValid, msg: '' },
        monthlyIncome: { error: monthlyIncomeIsValid, msg: '' }
      }
      return true
    }
  }

  const submit = () => {
    const valid = validate()

    if (valid) router.push({ path: '/result' })
  }

  const loanApproved = computed(() => formData.value.monthlyIncome > 1000)

  const reset = () => {
    formData.value = {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      monthlyIncome: 0
    }
    validation.value = VALIDATION_INIT
  }

  return { formData, validation, submit, loanApproved, reset }
})
