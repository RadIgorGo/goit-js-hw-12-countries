import './styles.css';

import { debounce } from 'lodash';
import listOfCountries from './tamplates/list_of_countries.hbs';
import countryCard from './tamplates/country_card.hbs';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import makeCountryMarkupList from './js/makeCountryMarkupList';
import makeError from './js/makeError';

refs.input.addEventListener('input', debounce(fetchlistOfCountries, 1000));

function fetchlistOfCountries(e) {
  const name = e.target.value;

  if (e.target.value === '') {
    makeCountryMarkupList('');
  } else {
    fetchCountries(name)
      .then(countries => {
        if (countries.length === 1) {
          makeCountryMarkupList(countryCard(countries[0]));
        } else if (countries.length > 10) {
          makeError();
        } else {
          makeCountryMarkupList(listOfCountries(countries));
        }
      })
      .catch(error =>
        makeCountryMarkupList('<h3>Sorry! Could not find this page</h3>'),
      );
  }
}
