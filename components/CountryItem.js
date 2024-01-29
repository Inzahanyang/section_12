import { useRouter } from "next/router";
import style from "./CountryItem.module.css";
import Image from "next/image";
export default function CountryItem({
  flagEmoji,
  flagImg,
  commonName,
  region,
  capital,
  population,
  code,
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/country/${code}`);
  };
  return (
    <div onClick={onClick} className={style.container}>
      <div className={style.flag_img}>
        <Image src={flagImg} fill alt="" />
        {/* Image position is abosoute so parent need reletive */}
      </div>
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역: {region}</div>
        <div>수도: {capital && capital.join(", ")}</div>
        <div>인구: {population && population.toLocaleString("ko-KR")}</div>
      </div>
    </div>
  );
}
