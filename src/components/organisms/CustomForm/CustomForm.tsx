//pensar un schema las propiedades del formulario
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, schema } from '../../../models';
import InputForm from '../../atom/CustomInput/CustomInput';

//vamos a decir como van hacer las propiedades de un objeto
//zod es para crear schemas
/** porque frontend y backend les encanta los schemas?
 * porque ademas de poner estas cosas muy geniales,
 * ademas de validar, tambien nos ayudan a tipar
 * 
 */

export const CustomForm = () => {
//esto es un custom state, nos retornara cosas, devuelve métodos
//devuelve un objeto con métodos
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "test@test.com",
            password: "123123",
            confirmPassword: "123123"
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="name" control={control} label="Name"
            type="text" error={errors.name} />
            <InputForm name="email" control={control} label="Email"
            type="email" error={errors.email} />
            <InputForm name="password" control={control} label="Password"
            type="password" error={errors.password} />
            <InputForm name="confirmPassword" control={control} label="Confirm Password"
            type="password" error={errors.confirmPassword} />
            <button type="submit">Submit</button>
            
        </form>
    )
}

export default CustomForm;