export default searchQuery => {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    response => {
      if (!response.ok) {
        throw error;
      }
      return response.json();
    },
  );
};
