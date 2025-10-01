import "./styles/index.scss";
import {Suspense} from "react";

function App() {

    return (
        <Suspense fallback={<AppLoader />}>
            {/*<AppRouter />*/}
            <div>VITE</div>
        </Suspense>
    )
}

export default App
