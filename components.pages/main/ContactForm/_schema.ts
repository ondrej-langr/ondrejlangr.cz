import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Napiště mi také jméno ať se trochu poznáme lépe"),
  email: Yup.string().email().required("Zanechte mi na sebe kontakt, prosím"),
  telephone: Yup.string().optional(),
  message: Yup.string().required("Napište mi prosím ještě nějakou zprávu ať vím o co se jedná ;)"),
  budget: Yup.number().optional()
})

export default validationSchema;