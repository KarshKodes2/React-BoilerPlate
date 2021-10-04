/** @jsxImportSource @emotion/react */
import "twin.macro";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./Settings/routes";
import { Landing, ErrorPage, Home } from "./pages";
import PrivateRoute from "./Settings/PrivateRoute";

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route exact path={ROUTES.INDEX} component={Landing} />
				<PrivateRoute exact path={ROUTES.DASHBOARD} component={Home} />

				{/* Error Page */}
				<Route exact path={ROUTES.ERRORPAGE} component={ErrorPage} />
			</Switch>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
