import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import Head from "next/head";

export default function Home({ countries }) {
  const [results, setResults] = useState(countries);
  useEffect(() => {
    setResults(countries);
  }, [countries]);
  return (
    <>
      <Head>
        <title>Naras</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image" content="NARAS" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <SearchBar />
      <CountryList countries={results} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
