
import ReactDOM from 'react-dom/client';
import './index.css';
import Navi from './components/navigation';
import Foot from './components/footer';
import Tex from './components/text';
import Price from './Price';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

    <Router><Switch>
    <Route exact path="/" component={Price} />
    <Route exact path="/hello" component={Navi} />
    </Switch> </Router>


</>

);
