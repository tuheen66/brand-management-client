import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex  justify-center text-center m-40">
            <div>
                <h1 className="text-8xl font-bold">404</h1>
                <h1>Oops!</h1>
                <p>Sorry, there is no such page that you are looking for.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'>
                    <button className="btn btn-sm btn-neutral mt-8">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
}