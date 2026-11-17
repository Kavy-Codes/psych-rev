export type OnePagerSubject = 'english' | 'psych' | 'socio' | 'hindi';

export interface OnePagerNote {
  id: string;
  subject: OnePagerSubject;
  book: string;
  section?: string;
  chapter: number;
  chapterLabel: string;
  title: string;
  author?: string;
  marks?: number;
  summary: string;
  keyPoints: string[];
  keyTerms?: { term: string; definition: string }[];
  keyPeople?: { name: string; contribution: string }[];
  quotes?: { text: string; explanation: string }[];
  examQuestions?: { question: string; answer: string }[];
  examTips?: string[];
  devices?: string[];
  characterSketch?: string;
  wordMeanings?: { word: string; meaning: string }[];
}
