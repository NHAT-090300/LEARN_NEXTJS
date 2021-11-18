import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/dist/client/image';
function Slider() {
	return (
		<Carousel className='slider'>
			<Carousel.Item interval={1000}>
				<Image
					className='d-block w-100 imgSlider'
					src='/images/px-beach-daylight-fun-1430675-image.jpg'
					alt='First slide'
					layout='responsive'
					width='100%'
					height='30%'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<Image
					className='d-block w-100 imgSlider'
					src='/images/px-fun-man-person-2361598-image.jpg'
					alt='Second slide'
					layout='responsive'
					width='100%'
					height='30%'
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					className='d-block w-100 imgSlider'
					src='/images/waves.jpg'
					alt='Third slide'
					layout='responsive'
					width='100%'
					height='30%'
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
