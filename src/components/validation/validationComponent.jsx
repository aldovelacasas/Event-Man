import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Requerido'),
  date: Yup.date().required('Requerido').min(new Date(), 'La fecha debe ser en el futuro'),
  time: Yup.string().required('Requerido'),
  description: Yup.string(),
});
