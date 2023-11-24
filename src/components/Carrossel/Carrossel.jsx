import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ItemCarrossel from "./ItemCarrossel/ItemCarrossel";
import garrafa from "../../../public/assets/garrafa.png";
import celular from "../../../public/assets/celular.png";
import lembrete from "../../../public/assets/lembrete.png";
import medico from "../../../public/assets/medico.png";





function Carrosel() {
  const [index, setIndex] = useState(0);

  const textoBanner1 =
    "Conheça nossa garrafa inteligente equipada com sensores de última geração para monitorar seu consumo de água, mantendo-o hidratado e saudável.";
  const textoBanner2 =
    "A desidratação pode ser um desafio sério para a saúde. Garanta que você ou seus entes queridos permaneçam devidamente hidratados.";
  const textoBanner3 =
    "Pacientes recebem lembretes personalizados dos horários ideiais para a ingestão de água, tudo acessível através de um aplicativo fácil de usar.";
  const textoBanner4 =
    "Médicos podem acessar informações detalhadas de hidratação dos pacientes, facilitando um acompanhamento preciso e cuidado personalizado";
  const textoBotao ="Saiba mais"
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ItemCarrossel
          titulo="Monitoramento com garrafa inteligente!"
          texto={textoBanner1}
          botao={textoBotao}
          imagem={garrafa}
        />
      </Carousel.Item>
      <Carousel.Item>
        <ItemCarrossel
          titulo="Acompanhe quanto você bebe de água!"
          texto={textoBanner2}
          botao={textoBotao}
          imagem={celular}
        />
      </Carousel.Item>
      <Carousel.Item>
        <ItemCarrossel
          titulo="Lembretes 
          personalizados"
          texto={textoBanner3}
          botao={textoBotao}
          imagem={lembrete}
        />
      </Carousel.Item>
      <Carousel.Item>
        <ItemCarrossel
          titulo="Monitoramento médico"
          texto={textoBanner4}
          botao={textoBotao}
          imagem={medico}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;
