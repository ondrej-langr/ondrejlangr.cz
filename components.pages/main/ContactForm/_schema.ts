import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Leave me here your name so I can know who Im gonna talk to"),
  email: Yup.string().email().required("Dont forget to write down your mail!"),
  telephone: Yup.string().optional(),
  message: Yup.string().required("...and message is important too!"),
  budget: Yup.number().optional()
})

export default validationSchema;