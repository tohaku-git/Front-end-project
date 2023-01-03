import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </main>
    )
}
export default Main;