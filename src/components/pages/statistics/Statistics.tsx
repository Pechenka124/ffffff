import React from 'react';
import styles from './Statistics.module.scss'; 
import { dataOne, dataTwo } from './data/data'; 
import likes from "../../../assets/like.png";
import reiting from "../../../assets/reiting.png";
import {useState} from'react'
const Statistics: React.FC = () => {
    const [isActive,setIsActive] = useState<boolean>(false)
    function click(){
        setIsActive(!isActive)
    }
  return (
    <>
      <div className={styles.diageams}>
        
        <img className={styles.diagram} src={likes} />
        <img className={styles.diagram} src={reiting} />
      </div>
        <button onClick={click} className={styles.btn}>Подробнее</button>
      <div className={isActive ? styles.mainContentTrue:styles.mainContentFalse}>
        <h2 className={styles.header}>Достопримечательности</h2>
        <div className={styles.columns}>
          {
            dataOne.map((elem: any, id: number) => (
              <div key={id}>{elem}</div> // Предполагается, что у элемента есть id и name
            ))
          }
        </div>

        <h2 className={styles.header}>Места развлечений</h2>
        <div className={styles.columns}>
          {
            dataTwo.map((elem: any, id: number) => (
              <div key={id}>{elem}</div> // Аналогично здесь
            ))
          }
        </div>
      </div>

      <h2 className={styles.header}>Общий анализ отзывов</h2>
      <h2 className={styles.text}>Посетители отмечают, что цены в некоторых местах неоправданно высоки, особенно если сравнивать их с качеством предоставляемых услуг. Однако есть и те, кто считает, что стоимость соответствует уровню сервиса.
        Большинство мест рассчитаны на молодую аудиторию, поэтому людям старшего возраста может быть некомфортно находиться там. Но есть и исключения — некоторые заведения успешно привлекают посетителей всех возрастов благодаря уютной атмосфере и разнообразному меню.
        Некоторые посетители жалуются на то, что в некоторых местах не уделяют должного внимания уборке. Это может создавать неприятное впечатление у гостей и снижать общую оценку заведения.
        В целом, отзывы о заведениях могут быть разными, но важно помнить, что каждый человек имеет своё мнение и предпочтения. Поэтому перед посещением какого-либо места лучше всего ознакомиться с отзывами других людей и составить собственное мнение.
      </h2>
    </>
  );
};

export default Statistics;
