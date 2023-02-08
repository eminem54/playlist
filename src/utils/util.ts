export function hashURLToObject(url: string) {
  const hash = url.split('#');

  if (hash.length < 2) return { access_token: '' };

  const paramList = hash[1].split('&');

  const obj = paramList.reduce(
    (acc, item) => {
      const [key, value] = item.split('=');

      return { ...acc, [key]: value };
    },
    { access_token: '' }
  );
  return obj;
}
