const Footer = () => {
  return (
    <footer className='bg-dark text-white p-5 pb-3'>
      <div className='container'>
        <div className='row d-flex p-3'>
          <ul className='d-flex justify-content-center list-unstyled fs-4'>
            <li className='mx-3'>
              <a href='#' className='text-white'>
                <i className='bi bi-facebook'></i>
              </a>
            </li>
            <li className='mx-3'>
              <a href='#' className='text-white'>
                <i className='bi bi-instagram'></i>
              </a>
            </li>
            <li className='mx-3'>
              <a href='#' className='text-white'>
                <i className='bi bi-envelope'></i>
              </a>
            </li>
            <li className='mx-3'>
              <a href='#' className='text-white'>
                <i className='bi bi-whatsapp'></i>
              </a>
            </li>
            <li className='mx-3'>
              <a href='#' className='text-white'>
                <i className='bi bi-github'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='row copyright'>
          <div className='col'>
            <p className='text-secendory text-center'>
              @ copyright Shariq Riaz 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
