import React from 'react';
import Link from 'next/link';
const index:React.FC = () => {
  return (
    <form>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="form2Example34" />
              <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
            </div>
          </div>
          <div className="col">
            <Link href='/register'>
              <a >Forgot password?</a>
            </Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
        <div className="text-center">
          <p>Not a member? <Link href="/register"><a>Register</a></Link></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
  )
}
export default index;