import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header';

const App = () => {

    const Landing = () => <h2>Landing</h2>
    const Dashboard = () => <div>Dashboard</div>
    const SurveryNew = () => <div>SurveyNew</div>

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveryNew} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App; 