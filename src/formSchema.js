import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter a name for your order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'You must select a size'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean(),
    special: yup
        .string()
})

export default formSchema;
