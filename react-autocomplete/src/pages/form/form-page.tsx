import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { Autocomplete } from "../../components/autocomplete.tsx";
import { getProfessions, type GetProfessionsResponse } from "../../api/get-professions.ts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

type FormData = {
  professionId: number | null;
  date: Date | null;
};

export function FormPage() {
  const form = useForm<FormData>();
  const [professionSearch, setProfessionSearch] = useState("");

  const professionsQuery = useQuery<
    GetProfessionsResponse,
    Error,
    Array<{ id: number; label: string }>,
    [string, { profession: string }]
  >({
    enabled: professionSearch.length > 0,
    queryKey: ["professions", { profession: professionSearch }],
    async queryFn({ queryKey }) {
      const profession = queryKey[1].profession.split("-")[0];
      return new Promise((resolve) => setTimeout(() => resolve(getProfessions({ profession })), 1000));
    },
    placeholderData: (previousData) => previousData ?? [],
    select(data) {
      return data.map((profession) => ({
        id: profession.id,
        label: profession.profissao_pessoa,
      }));
    },
  });

  function onSubmit(data: FormData) {
    console.log({
      profissao: data.professionId,
      data: format(data.date!, "yyyy-MM-dd"),
    });
  }

  function onQueryDispatch(inputSearch: string) {
    if (inputSearch.length > 0) {
      setProfessionSearch(inputSearch + "-" + Date.now());
    } else {
      setProfessionSearch(inputSearch);
    }
  }

  const professions = professionsQuery.data ?? [];

  return (
    <Box bgcolor="#f8f9fa" component="main">
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper elevation={0} sx={{ p: 4, width: "100%", border: "1px solid rgba(0, 0, 0, 0.23)", maxWidth: "28rem" }}>
          <Typography variant="h5" component="h1" gutterBottom fontWeight={700}>
            Formulário
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <Box component="form" onSubmit={form.handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
              <Controller
                name="professionId"
                control={form.control}
                defaultValue={null}
                rules={{ required: "Este campo é obrigatório" }}
                render={({ field, fieldState }) => (
                  <Autocomplete
                    label="Profissão"
                    value={field.value}
                    search={professionSearch}
                    isLoading={professionsQuery.isFetching}
                    isFetched={professionsQuery.isFetched}
                    items={professions}
                    onSelectChange={field.onChange}
                    errorMessage={fieldState.error?.message}
                    dispatchQuery={onQueryDispatch}
                  />
                )}
              />
              <Controller
                name="date"
                control={form.control}
                defaultValue={null}
                rules={{ required: "Este campo é obrigatório" }}
                render={({ field, fieldState }) => (
                  <DatePicker
                    label="Data"
                    value={field.value}
                    onChange={field.onChange}
                    sx={{ ".MuiButtonBase-root": { marginRight: 0 } }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        margin: "normal",
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                      },
                    }}
                  />
                )}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, textTransform: "none", fontWeight: "bold" }}
              >
                Enviar
              </Button>
            </Box>
          </LocalizationProvider>
        </Paper>
      </Container>
    </Box>
  );
}
