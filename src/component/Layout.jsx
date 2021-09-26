import { Fragment } from 'react';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
