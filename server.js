import express from "express"
import axios from "axios"
import cors from "cors"
const app = express()

app.use(cors())
app.get("/api/historico/consumo", async (req, res)=>{
    try{
        const response = await axios.get('http://46.17.108.113:8666/STH/v1/contextEntities/type/iot/id/urn:ngsi-ld:Flooence/attributes/distancia?lastN=30',{
            headers: {
                "accept": "application/json",
                'fiware-service': 'smart',
                'fiware-servicepath': '/'
              }

        })
        res.json(response.data.contextResponses[0].contextElement.attributes[0].values)
    }catch(error){
        console.log(error)
        res.status(500).send('Erro ao obter os dados do servidor remoto.');
    }
})
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor proxy em execução na porta ${port}`);
});