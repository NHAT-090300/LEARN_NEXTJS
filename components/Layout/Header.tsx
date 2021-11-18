import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
const Header = () => {
	return (
		<Navbar className='navBar' bg='light' expand='lg' >
			<Container>
				<Navbar.Brand href='#home'>
					<Link href='/'>
						<h3 className='logo'>LearnNextJS</h3>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto menu'>
						<Link href='/'>
							<a className='menuItem'>Home</a>
						</Link>
						<Link href='/blog'>
							<a className='menuItem'>Blog</a>
						</Link>
						<Link href='/contact'>
							<a className='menuItem'>Contact</a>
						</Link>
						<Link href='/404'>
							<a className='menuItem'>404</a>
						</Link>
						<div>
							<Link href='/login'>
								<a className='menuItem'>Login</a>
							</Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
