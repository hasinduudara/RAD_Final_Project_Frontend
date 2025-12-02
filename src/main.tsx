import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { store, loadUserData } from './context/userContext.tsx';
import type { AppDispatch } from './context/userContext.tsx';

// Component to initialize app state - exported to satisfy fast refresh
export function AppInitializer({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Load user data on app mount
        dispatch(loadUserData());
    }, [dispatch]);

    return <>{children}</>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppInitializer>
                    <App />
                </AppInitializer>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);