export const getQueryParameters = (
  names: string[],
  search?: string,
): Record<string, string | null> => {
  const urlParams = new URLSearchParams(search ?? window.location.search);
  const parameters: Record<string, string | null> = {};

  names.forEach((name) => {
    const value = urlParams.get(name);
    parameters[name] = value;
  });

  return parameters;
}