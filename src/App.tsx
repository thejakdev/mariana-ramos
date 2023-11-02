import { ThemeProvider } from '@mui/material';
import { theme } from './themes';
import './assets/css/main.scss';
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes';

export default function App() {
  const { router } = Router();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
