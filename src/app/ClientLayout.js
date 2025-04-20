'use client'

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SnackbarProvider } from '@/context/SnackbarContext';
import Image from 'next/image';
import GlobalHeader from '@/components/organisms/GlobalHeader';
import GlobalFooter from '@/components/organisms/GlobalFooter';
import PropTypes from 'prop-types';

function ClientLayout({ children, logo }) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <GlobalHeader className="absolute z-1">
          <Image
            src={logo.src}
            alt="Tattoo Studio Logo"
            width={150}
            height={50}
            priority
          />
        </GlobalHeader>
        {children}
        <GlobalFooter />
      </SnackbarProvider>
    </Provider>
  );
}

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientLayout; 