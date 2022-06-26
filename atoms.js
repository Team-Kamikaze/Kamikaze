import { atom } from "recoil";

export const searchValueAtom  = atom({
    key: 'searchValueAtom', 
    default: '', 
  });
  export const sideIsOpenAtom= atom({
    key: 'sideIsOpenAtom', 
    default: true, 
  });