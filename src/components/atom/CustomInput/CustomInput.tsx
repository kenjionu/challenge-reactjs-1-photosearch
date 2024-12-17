import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css'
import { FormValues } from "../../../models";

//por que es keyof FormValues?
//porque FormValues es un objeto que tiene como propiedades los campos del formularioß
interface InputFormProps {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type: string;
    error?: FieldError;
}

const InputForm = ({ name, control, label, type, error}: InputFormProps) => {
    return (
        <div className='form-group'>
            <label htmlFor='name'>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <input id={name} type={type} {...field} className={`form-control ${error ? 'is-invalid' : ''}`} />
            }
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}

export default InputForm