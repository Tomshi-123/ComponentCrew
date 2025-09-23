export type StudentGrades = {
  id: string;
  name: string;
  math: number;
  english: number;
  science: number;
  [key: string]: string | number;
};

export type TableData = StudentGrades[];
