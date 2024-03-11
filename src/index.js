
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Navi from './components/navigation';
import Foot from './components/footer';
import Tex from './components/text';
import Price from './Price';
import Sign from './sign';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecondPage from './components/second';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

    <Router><Switch>
    <Route exact path="/hello" component={Home} />
    <Route exact path="/" component={SecondPage} />

    </Switch> </Router>


</>

);
