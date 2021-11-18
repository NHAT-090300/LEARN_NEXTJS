import React from 'react';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

const MyApp :React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
