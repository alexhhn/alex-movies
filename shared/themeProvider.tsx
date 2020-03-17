import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from 'shared/theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const AppThemeProvider = ({ children }: any) => {
  const isDarkTheme = useSelector((state: RootState) => state.user.darkTheme);
  const userTheme = isDarkTheme ? darkTheme : defaultTheme;
  return <ThemeProvider theme={userTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
