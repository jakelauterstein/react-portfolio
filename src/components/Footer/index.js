import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.linkedin.com/in/jake-lauterstein/'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-linkedin' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://github.com/jakelauterstein'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-github' />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='https://www.youtube.com/channel/UChetJQuzKxBIiCJH6kMNFKw'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-youtube' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright
      </div>
    </MDBFooter>
  );
}