import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  pay_date: yup.date().required(),
  hours_worked: yup.number().integer().required(),
  overtime_hours: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});
