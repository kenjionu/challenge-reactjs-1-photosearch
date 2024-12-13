
interface Props {
    children: string;
    parentMethod: () => void;
}


export const Button = ({children, parentMethod}: Props) => {

    const handleClick = () => {
        parentMethod()
    }

    return (
        <button 
        className='custom-button'
        type="button"
        onClick={handleClick}>
        {children}
      </button>
      )
}