import React, {ReactElement} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DocumentationPage from './pages/DocumentationPage';
import Information from "./pages/documentation/Information";

function App(): ReactElement {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/documentation/information" element={<Information />} />
            </Routes>
        </Router>
    );
}

export default App;
