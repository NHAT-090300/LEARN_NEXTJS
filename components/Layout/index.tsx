import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Script from 'next/script';
import { useRouter } from 'next/router';
const Layout: React.FC = ({ children }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Document</title>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
					integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;525;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main>
				<Header />
				{router.pathname ==='/' && <Slider />}
				{children}
				<Footer />
			</main>
			<footer></footer>
		</>
	);
}

export default Layout;
