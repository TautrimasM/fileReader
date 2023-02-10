import { defDir } from "./definedDirectory.json";
import fs from "fs";

interface Item {
  name: string;
  active: boolean;
}

let state: Item[] = [];

export const getList = () => {
  const list = fs.readdirSync(defDir);
  list.forEach((file: string) => {
    state.push({ name: file, active: true });
  });
  return state;
};

export const scanFiles = () => {
  const oldState = state;
  state = [];

  const list = fs.readdirSync(defDir);
  list.forEach((file: string) => {
    state.push({ name: file, active: true });
  });

  oldState.forEach((oldItem: Item) => {
    state.forEach((newItem: Item) => {
      if (oldItem.name === newItem.name && oldItem.active === newItem.active) {
        delete oldState[oldState.indexOf(oldItem)];
      }
    });
  });
  oldState.forEach((item: Item) => {
    state.push({ name: item.name, active: false });
  });

  return state;
};
