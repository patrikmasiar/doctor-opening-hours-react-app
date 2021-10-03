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
};

const formatURLQuery = (query: string): string => {
  return query.replace(/%2C/g, ',');
};

export const setQueryParameter = (name: string, value: any): void => {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set(name, value as string);

  const newQuery = window.location.pathname + '?' + urlParams.toString();

  window.history.replaceState(null, '', formatURLQuery(newQuery));
};
