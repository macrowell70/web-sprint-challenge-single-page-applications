import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullName: yup
      .string()
      .trim()
      .required("Please enter your full name")
      .min(2, "name must be at least 2 characters"),
    size: yup
      .string()
      .oneOf(["small", "medium", "large", "x-large"], "please pick your size"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
    greenPepper: yup.boolean(),
    anchovies: yup.boolean(),
    special: yup.string().trim()
  })

  
  export default formSchema