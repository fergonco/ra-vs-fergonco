// in src/App.js
import * as React from "react";
import { Admin, fetchUtils, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const httpClient = (url, options = {}) => {
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:3000', httpClient);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
    </Admin>
);

export default App;

