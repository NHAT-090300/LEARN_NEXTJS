import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function NotFound() {
	return (
		<div className='container text-center'>
			<div className='content-404'>
				<Image
					src='/images/404/404.png'
					className='img-responsive'
					width='500'
					height='500'
					alt=''
				/>
				<h1>
					<b>OPPS!</b> We Couldn’t Find this Page
				</h1>
				<p>
					Uh... So it looks like you brock something. The page you are looking
					for has up and Vanished.
				</p>
				<h2>
					<Link href='/'>Bring me back Home</Link>
				</h2>
			</div>
		</div>
	);
}

export default NotFound;
