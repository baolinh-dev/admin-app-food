import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
    function HeaderView() {
        const location = useLocation();
        console.log(location.pathname);
        return <span>Path : {location.pathname}</span>;
    }
    return (
        <div className="app">
            <div className="content">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        var Layout = DefaultLayout;
                        var Page = route.component;

                        if (Layout) {
                            Layout = route.layout;
                        } else if (Layout == null) {
                            Layout = Fragment;
                        } 

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default App;
