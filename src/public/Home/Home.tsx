import { Button } from '../../components/atom/Button/Button'
import { usePage } from '../../hooks';
import './Home.css'

export const Home = () => {
    const { changePage } = usePage();

    return(
        <div className='home'>
            <div className='involve-bottom'>
                <div className='content'>
                    <h2>PhotoSearch</h2>
                    <p>Find your best photographer in the city</p>
                    <div className='button'>
                    <Button parentMethod={() => changePage(2)} >Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}