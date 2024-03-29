import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Iconshopping from '../assets/shopping-cart-solid.svg';
export const getStaticProps:GetStaticProps = async () => {
	const url: string = 'http://localhost/laravel/public/api/product'
	const res = await axios.get(url);
	if(!res.data) {
		return {
      notFound: true,
    }
	}
	return {
		props: {
			data: res.data
		}
	}
}
const HomePage:React.FC<AppProps> = ({data}) => {
	const [product, setProduct] = useState(data);
	return (
		<div>
			<Head>
				<title>Home Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='wrap'>
				<div className='mt-5'>
					<div className='cardTitle'>
						<span>New Products</span>
						<div></div>
					</div>
					<div className='listCard mt-3'>
						{product.data.map((data, i) => {
							if(i===0) return null;
							let imgs = JSON.parse(data.image);
							return <div className='card cardItem' key={i}>
								<img className='card-img-top'src={'http://localhost/laravel/public/upload/user/product/'+data.id_user+'/'+imgs[0]} alt='......'/>
								<div className='card-body'>
									<h4>
										${data.price}
									</h4>
									<h5 className='card-title'>{data.name}</h5>
									<p className='card-text'>
										Some quick example text to build on the card title and make up
										the bulk of the cards content.
									</p>
									<Link href='#'>
										<a className='btn btnCard'>
											<img src={Iconshopping} alt='...'/>
											<span>add to card</span>
										</a>
									</Link>
								</div>
							</div>
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
export default HomePage;