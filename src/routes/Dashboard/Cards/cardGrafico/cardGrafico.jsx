import "./style.scss";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


function CardGrafico() {
  const [historicoConsumo, setHistoricoConsumo] = useState([]);

  const consumoHistorico = () => {
    fetch("http://localhost:4000/api/historico/consumo")
      .then((response) => response.json())
      .then((result) => setHistoricoConsumo(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    consumoHistorico();
  }, []);
  const dataConsumo = [];
  // console.log(historicoConsumo)
  historicoConsumo.forEach((item) => {
    const dataOriginal = item.recvTime;
    const dataFormatada = format(new Date(dataOriginal), "HH:mm");
    dataConsumo.push({
      id: item._id,
      recvTime: dataFormatada,
      valores: item.attrValue,
      attrType: item.attrType,
      attrName: item.attrName,
    });
  });
  console.log(dataConsumo);

  //ESTILOS divCard / mensagem hidratação comprtilhados do cardPorcentagem.scss
  return (
    <div className="divCard">
      <h2 className="mensagemHidratacao">Relátorio de hidratação (dia)</h2>
      <LineChart
          width={500}
          height={250}
          data={dataConsumo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis color="#fff" dataKey="recvTime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valores" stroke="#fff" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
  );
}

export default CardGrafico;
