import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./styled-components/theme";
import GlobalStyles from "./styled-components/GlobalStyles";
import DebtPage from "./features/debts/pages/xxxxxxxx";

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <DebtPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;

