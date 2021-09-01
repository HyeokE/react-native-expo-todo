import { useState } from 'react';
import Home from '../screen/Home';

function Router() {
    const [isLoggedIn, setIsLoggedIn] = usestate(false);
    return (
        <>
            {isLoggedIn ? (
                <Route exact path="/">
                    <Home />
                </Route>
            ) : (
                <Route exact path="/"></Route>
            )}
            )
        </>
    );
}
