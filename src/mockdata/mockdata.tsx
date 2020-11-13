import namor from 'namor';
import { PubOverview } from '../types/types';

const newPub = () => {
  const pub: PubOverview = {
    name: namor.generate({ words: 2, saltLength: 0 }),
    beer: Math.floor(Math.random() * 6),
    enviroment: Math.floor(Math.random() * 6),
    food: Math.floor(Math.random() * 6),
    pepole: Math.floor(Math.random() * 6),
  };

  return pub;
};

export function pubOverview(len: number) {
  return Array.from(Array(len)).map((d) => {
    return { ...newPub() };
  });
}
