import type { OnePagerNote, OnePagerSubject } from './types';
import { englishFlamingoProse } from './englishFlamingoProse';
import { englishFlamingoPoetry } from './englishFlamingoPoetry';
import { englishVistas } from './englishVistas';
import { psychOnePagers, socioOnePagers, hindiOnePagers } from './adapters';

export type { OnePagerNote, OnePagerSubject } from './types';

export const englishOnePagers: OnePagerNote[] = [
  ...englishFlamingoProse,
  ...englishFlamingoPoetry,
  ...englishVistas,
];

export const onePagerNotes: Record<OnePagerSubject, OnePagerNote[]> = {
  english: englishOnePagers,
  psych: psychOnePagers,
  socio: socioOnePagers,
  hindi: hindiOnePagers,
};

export const ONE_PAGER_SUBJECTS: {
  id: OnePagerSubject;
  name: string;
  code: string;
  description: string;
  accent: string;
  border: string;
  bg: string;
}[] = [
  {
    id: 'english',
    name: 'English Core',
    code: '301',
    description: 'Flamingo + Vistas — all 19 chapters',
    accent: 'text-amber-300',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/[0.04]',
  },
  {
    id: 'psych',
    name: 'Psychology',
    code: '337',
    description: 'All 7 chapters — theories, terms & exam Qs',
    accent: 'text-indigo-300',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/[0.04]',
  },
  {
    id: 'socio',
    name: 'Sociology',
    code: '039',
    description: 'All 5 chapters — thinkers, facts & answers',
    accent: 'text-teal-300',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/[0.04]',
  },
  {
    id: 'hindi',
    name: 'Hindi Elective',
    code: '322',
    description: 'Antra + Antral — all 25 chapters',
    accent: 'text-rose-300',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/[0.04]',
  },
];

export function getOnePagerNotes(subject: OnePagerSubject): OnePagerNote[] {
  return onePagerNotes[subject] || [];
}
