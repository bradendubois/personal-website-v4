import type { AppProps } from "next/app";
import { ThemingProvider } from "../util/theme";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemingProvider>
			<Component {...pageProps} />
		</ThemingProvider>
	);
};

export default MyApp;
