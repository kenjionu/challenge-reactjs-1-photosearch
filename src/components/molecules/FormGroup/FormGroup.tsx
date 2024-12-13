import { ReactNode } from "react"



interface Props {
    children: ReactNode
}

export const FormGroup = ({children}: Props) => {
    return(
        <form className="form-group"> 
            {children}
        </form>
    )
}