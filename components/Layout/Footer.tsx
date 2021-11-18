import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
	return (
		<footer className='bg-light text-center text-white'>
			<div className='container p-4 pb-0'>
				<section className='mb-4'>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#3b5998' }}
							role='button'>
							<i className='fab fa-facebook-f' />
						</a>
					</Link>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#55acee' }}
							role='button'>
							<i className='fab fa-twitter' />
						</a>
					</Link>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#dd4b39' }}
							role='button'>
							<i className='fab fa-google' />
						</a>
					</Link>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#ac2bac' }}
							role='button'>
							<i className='fab fa-instagram' />
						</a>
					</Link>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#0082ca' }}
							role='button'>
							<i className='fab fa-linkedin-in' />
						</a>
					</Link>
					<Link href='https:facebook.com/'>
						<a
							className='btn btn-primary btn-floating m-1'
							style={{ backgroundColor: '#333333' }}
							role='button'>
							<i className='fab fa-github' />
						</a>
					</Link>
				</section>
			</div>
			<div
				className='text-center p-3'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				© 2020 Copyright:
				<a className='text-white' href='https://mdbootstrap.com/'>
					MDBootstrap.com
				</a>
			</div>
		</footer>
	);
}

export default Footer;
