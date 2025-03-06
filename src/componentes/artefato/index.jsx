import React from 'react';
import classes from './artefato.module.css';

const Artefato = ({ title, iconUrl, bonus2, bonus4 }) => {
  return (
    <div className={classes.artefato}>
      <img
        src={iconUrl}
        alt={`Ícone do conjunto de artefatos ${title}`}
        className={classes.icon}
      />
      <div className={classes.raridade}>⭐⭐⭐⭐⭐</div>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.bonus}>
        <p><b>2 peças:</b></p>
        <p>{bonus2}</p>
      </div>
      <div className={classes.bonus}>
        <p><b>4 peças:</b></p>
        <p>{bonus4}</p>
      </div>
    </div>
  );
};

export default Artefato;