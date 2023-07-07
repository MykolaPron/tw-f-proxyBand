import * as React from 'react'
import routes from './routes'
import { Route, Routes } from 'react-router-dom'

import './index.css';

import Error404Page from "./pages/Error404Page";

export default function App ({ serverData=null }) {

    return (
        <React.Fragment>
            <main className="relative min-h-screen max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <Routes>
                    {routes.map(({ path, fetchInitialData, component: C }) => {
                        let data;
                        if(__isBrowser__){
                            data = window.__INITIAL_ROUTE__ === path
                                ? window.__INITIAL_DATA__
                                : null
                        }else{
                            data = serverData
                        }

                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<C
                                    data={data}
                                    fetchInitialData={fetchInitialData}
                                />}
                            />
                        )
                    })}
                    <Route path='*' element={<Error404Page />} />
                </Routes>
            </main>
        </React.Fragment>
    )
}