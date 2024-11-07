import MoonTable from "./body/MoonTable";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Body = () => {
  
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode? 'dark' : 'light', // 啟用深色模式
      primary: {
        main: '#1994FC',
      },
    },
  });
  return (
    <section className="bg-[#F4F4F4] relative">
      <ThemeProvider theme={darkTheme}>
            <MoonTable />
            </ThemeProvider>
    </section>
  );
};

export default Body;
