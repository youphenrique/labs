import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormPage } from "./pages/form/form-page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <FormPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
