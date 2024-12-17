import { Button } from '../../components/atom/Button/Button'
import './Home.css'

const handleClick = () => {
    console.log('hoy me clickeo todo')
  }


export const Home = () => {
    return(
        <div className='home'>
            <div className='involve-bottom'>
                <div className='content'>
                    <h2>PhotoSearch</h2>
                    <p>Find your best photographer in the city</p>
                    <div className='button'>
                    <Button parentMethod={handleClick} >Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}