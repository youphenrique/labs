type GetProfessionsVariables = {
  profession: string;
};

export type GetProfessionsResponse = Array<{
  id: number;
  cod_cbo: string;
  profissao_pessoa: string;
}>;

export async function getProfessions(variables: GetProfessionsVariables) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URI}/professions?profissao_pessoa_like=${variables.profession}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as GetProfessionsResponse;
}
