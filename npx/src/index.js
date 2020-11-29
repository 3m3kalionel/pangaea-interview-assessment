import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import reportWebVitals from './reportWebVitals';
import Dashboard from "./components/Dashboard";
import './index.css';

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache(),
});

function ProductsPage() {
  const {
    data: currencyList,
    loading: isLoading,
    error: hasError
  } = useQuery(gql`
    {
      currency
    }
  `);

  const { loading, error, data, refetch } = useQuery(
    gql`
      query GET_PRODUCTS($currency: Currency!) {
        # getProducts(currency:$currency) {
        products {
          id
          id
          title
          image_url
          price(currency: $currency)
        }
      }
    `,
    {
      variables: {
        currency: "USD"
      }
    }
  );
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Dashboard data={data} refetch={refetch} currencyList={currencyList} />
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <ProductsPage />
      </div>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
