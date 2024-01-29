import { fetchCode } from "@/api";
import SubLayout from "@/components/SubLayout";
import style from "./code.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export default function Country({ country }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className={style.container}>
        <Head>
          <title>NARAS</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:image" content="NARAS" />
          <meta
            property="og:description"
            content="전 세계 국가들의 정보를 확인해보세요"
          />
        </Head>
        <div>Loading....</div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      {country ? (
        <>
          <Head>
            <title>{country.commonName} 국가 정보 조회 | NARAS</title>
            <meta property="og:image" content={country.flagImg} />
            <meta
              property="og:image"
              content={`${country.commonName} 국가 정보 조회 | NARAS`}
            />
            <meta
              property="og:description"
              content={`${country.commonName} 국가의 자세한 정보입니다.`}
            />
          </Head>
          <div className={style.header}>
            <div className={style.commonName}>
              {country.flagEmoji}&nbsp;{country.commonName}
            </div>
            <div className={style.officialName}>{country.officialName}</div>
          </div>
          <div className={style.flagImg}>
            <Image src={country.flagImg} alt="country" fill />
          </div>
          <div className={style.body}>
            <div>
              <b>코드 :</b>&nbsp;{country.code}
            </div>
            <div>
              <b>수도 :</b>&nbsp;{country.capital.join(", ")}
            </div>
            <div>
              <b>지역 :</b>&nbsp;{country.region}
            </div>
            <div>
              <b>인구 :</b>&nbsp;{country.population.toLocaleString("ko-KR")}
            </div>
            <div>
              <b>지도 :</b>&nbsp;
              <a target="_blank" href={country.googleMapURL}>
                {country.googleMapURL}
              </a>
            </div>
          </div>
        </>
      ) : (
        <div>존재하지 않는 국가코드명 입니다.</div>
      )}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  let country = null;
  if (code) {
    country = (await fetchCode(code)) || null;
  }

  return {
    props: { country },
  };
};
