import { CssBaseline, Box, Container } from "@mui/material";
import Table from "./components/table/Table";
import Form from "./components/form/Form";
import "./App.css";

const App: React.FC = () => {
  return (
    <Container component="main" className="app">
      <CssBaseline />
      <Box className="app-container">
        <Table />
        <Form />
      </Box>
    </Container>
  );
};

export default App;
