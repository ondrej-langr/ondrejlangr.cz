import {
  string as yupString,
  number as yupNumber,
  object as yupObject,
} from 'yup';

export const validationSchema = yupObject().shape({
  fullname: yupString().required(
    'Leave me here your name so I can know who Im gonna talk to'
  ),
  email: yupString().email().required('Dont forget to write down your mail!'),
  telephone: yupString().optional(),
  message: yupString().required('...and message is important too!'),
  budget: yupNumber().optional(),
});
