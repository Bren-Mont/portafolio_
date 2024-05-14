import Image from "next/image";
import React from "react";
import Card from '@mui/material/Card';
import imagenUrl from '../../../public/foto.jpg'
const About = () => {
  return (
    <Card  className="align-center max-content flex justify-center">
     
      <div className="text-center p-16" style={{maxWidth:'1000px'}}>
    
      <h1 className="font-semibold p-4 text-xl">Un poco sobre mí</h1>
      <div className="text-center">
      <img
          className="h-24 w-24 rounded-full object-cover shadow-lg m-6 "
          src={imagenUrl}
          alt={`Foto de `}
        />
        </div>
      <p>
        ¡Hola! Soy Brenda, una apasionada desarrolladora enfocada en el
        desarrollo de aplicaciones web. Me encanta crear sitios funcionales que
        no solo sean visualmente atractivos, sino también intuitivos y fáciles
        de usar.
      </p>
      <p>
        A lo largo de estos años he implementado diferentes tecnologías como
        JavaScript, React JS, Next Js, del lado del frontend, por otra parte en
        el backend he desarrollado servicios API´S con Python- Django y NodeJS,
        además de consultas y manipulación de datos con SQL.
      </p>
      <p>
        Mi objetivo es contribuir al mundo digital mediante la creación de
        aplicaciones web innovadoras que brinden soluciones efectivas a los
        problemas del mundo real. Me apasiona trabajar en equipos colaborativos
        y creativos donde pueda aportar mis habilidades técnicas y mi
        creatividad para crear experiencias en línea memorables y
        significativas.
      </p>
      <br/>
      <p>
        Cuando no estoy programando, me gusta entrenar, pasear al aire libre,
        leer y trotar. Creo firmemente en la importancia de mantener un
        equilibrio entre el trabajo y la vida personal para mantener la
        creatividad y la motivación en todo momento.

        Conoce mas de mi!!
      </p>
      </div>
    </Card>
  );
};

export default About;
