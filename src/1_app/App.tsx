import "./styles/index.scss";
import React, {ReactNode, Suspense, useEffect} from "react";
import {Loader, token_availability} from "@/6_shared";
import { AppLoader } from "@/3_widgets"
import {fetchRefreshToken, UserStore} from "@/5_entities/user";
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {observer} from "mobx-react";

const App = observer(() => {
    const { inited, initAuthData } = UserStore;

    useEffect(() => {
        if (!inited) {
            if (token_availability()) {
                fetchRefreshToken()
            } else {
                initAuthData();
            }
        }
    }, [inited]);

    if (!inited) {
        return <Loader />;
    }

    return (
        <div className="main-wrapper">
            <Suspense fallback={<AppLoader /> as ReactNode}>
                <AppRouter />
            </Suspense>
        </div>
    )
})


export default App
