import './index.css';
import RootContainer from './containers/RootContainer';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";


const container = document.getElementById('root');
const root = createRoot(container);

const app = (
<StrictMode>
    <BrowserRouter>
        <RootContainer/>
    </BrowserRouter>
</StrictMode>

);

root.render(app);







