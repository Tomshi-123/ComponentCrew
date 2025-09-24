// exempel på types som. kan användas on defineras här

export type StudentGrades = {
  id: string;
  name: string;
  math: number;
  english: number;
  science: number;
  [key: string]: string | number;
};

//export type TableData = StudentGrades[];
export type TableData = (string | number | boolean | Date | null)[][];
