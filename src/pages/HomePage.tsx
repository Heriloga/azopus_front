import axios from "axios";
import { useEffect, useState } from "react";

interface Data {
  nev: string;
  alkotasAzonosito: string;
  keletkezesKezdoIdopontjaInt: number;
  tipus: string;
  megjelenitendoNev: string;
}

export default function HomePage() {
  const [data, setData] = useState<Data[] | []>([]);

  const yellow = "rgb(223 207 111)";

  useEffect(() => {
    (async () => {
      const result = await axios(
        "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json"
      );
      if ("error" in result) {
        return;
      } else {
        setData(result.data);
      }
    })();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <ul className="max-w-8xl mx-auto grid gap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data &&
          data.map((item) => (
            <li
              key={item.alkotasAzonosito}
              className="m-3 flex flex-col text-left  p-4"
            >
              <img src="https://picsum.photos/200" />
              <span className="text-lg font-bold py-2">
                {item.keletkezesKezdoIdopontjaInt}
              </span>
              <span className="text-md py"> {item.tipus}</span>
              <span className="text-md py"> {item.megjelenitendoNev}</span>
              <span className="text-md py"> {item.nev}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
