import { atom } from 'jotai';
import { Presence } from '../types/lanyard';

export const doingAtom = atom<Presence | null>(null);
