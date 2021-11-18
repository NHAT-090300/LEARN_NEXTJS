import React from 'react';

const Contact: React.FC = () => {
	return (
			<div>
				<div className='cardTitle'>
					<span>CONTACT</span>
					<div></div>
				</div>
				<div id='contact-page' className='container'>
				<div className='bg mt-5'>
					<div className='row'>
						<div className='col-sm-8'>
							<div className='contact-form'>
								<h4 className='title text-center'>Get In Touch</h4>
								<div
									className='status alert alert-success'
									style={{ display: 'none' }}
								/>
								<form
									id='main-contact-form'
									className='contact-form row'
									name='contact-form'
									method='post'>
									<div className='form-group col-md-6 mb-2'>
										<input
											type='text'
											name='name'
											className='form-control'
											placeholder='Name'
										/>
									</div>
									<div className='form-group col-md-6 mb-2'>
										<input
											type='email'
											name='email'
											className='form-control'
											placeholder='Email'
										/>
									</div>
									<div className='form-group col-md-12 mb-2'>
										<input
											type='text'
											name='subject'
											className='form-control'
											placeholder='Subject'
										/>
									</div>
									<div className='form-group col-md-12 mb-2'>
										<textarea
											name='message'
											id='message'
											className='form-control'
											rows={8}
											placeholder='Your Message Here'
											defaultValue={''}
										/>
									</div>
									<div className='form-group col-md-12'>
										<input
											type='submit'
											name='submit'
											className='btn btn-primary pull-right'
											defaultValue='Submit'
										/>
									</div>
								</form>
							</div>
						</div>
						<div className='col-sm-4'>
							<div className='contact-info'>
								<h4 className='title text-center'>Contact Info</h4>
								<address>
									<p>E-Shopper Inc.</p>
									<p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
									<p>Newyork USA</p>
									<p>Mobile: +2346 17 38 93</p>
									<p>Fax: 1-714-252-0026</p>
									<p>Email: info@e-shopper.com</p>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
