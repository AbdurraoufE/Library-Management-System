import 'focus-visible'
import '@/styles/tailwind.css'
import { Amplify, Auth, AuthModeStrategyType } from 'aws-amplify';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AppProvider } from '@/AppContext';
import { studioTheme } from "@/ui-components";

import awsmobile from '../aws-exports';

Auth.configure(awsmobile);

Amplify.configure({
  ...awsmobile,
  authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
});

export default function App({ Component, pageProps }) {
  return (
      <AppProvider>
        <ThemeProvider theme={studioTheme}>
        <Authenticator className='mt-60'>
          <Component {...pageProps} />
        </Authenticator>
        </ThemeProvider>
      </AppProvider>
  )
}

