import { fetchSearchQueries } from "@/api";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import SubLayout from "@/components/SubLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (q) {
        const data = await fetchSearchQueries(q);
        setCountries(data);
      }
    };
    fetchData();
  }, [q]);

  return (
    <>
      <Head>
        <title>Search | NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image" content="NARAS" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <SearchBar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
