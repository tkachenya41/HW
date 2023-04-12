type Subject = {
  students: number;
  teachers: number;
};

type SubjectName = 'mathematics' | 'biology' | 'geography' | 'chemistry';

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6
  },
  biology: {
    students: 120,
    teachers: 6
  },
  geography: {
    students: 60,
    teachers: 2
  },
  chemistry: {
    students: 100,
    teachers: 3
  }
};

function getSubjectNamesAsString(subj: Record<SubjectName, Subject>): string {
  return Object.keys(subj).join(',');
}

function isSubjectName(key: string): key is SubjectName {
  return ['mathematics', 'biology', 'geography', 'chemistry'].includes(key);
}

function getSubjectNamesAsArray(
  subj: Record<SubjectName, Subject>
): SubjectName[] {
  return Object.keys(subj).filter(isSubjectName);
}

console.debug(getSubjectNamesAsString(subjects));
console.debug(getSubjectNamesAsArray(subjects));

function getTotalStudents(subj: Record<SubjectName, Subject>): number {
  return Object.values(subj).reduce(
    (accumulator, { students }) => accumulator + students,
    0
  );
}

function getTotalTeachers(subj: Record<SubjectName, Subject>): number {
  return Object.values(subj).reduce(
    (accumulator, { teachers }) => accumulator + teachers,
    0
  );
}

function getAverage(total: number, quantity: number): number {
  return total / quantity;
}

console.debug(
  getAverage(
    getTotalStudents(subjects),
    getSubjectNamesAsArray(subjects).length
  )
);

console.debug(
  getAverage(
    getTotalTeachers(subjects),
    getSubjectNamesAsArray(subjects).length
  )
);

type SubjectsSorter = (
  entryA: [key: string, value: Subject],
  entryB: [key: string, value: Subject]
) => number;
const sortByTeachersDesc: SubjectsSorter = ([, subjectA], [, subjectB]) => {
  return subjectB.teachers - subjectA.teachers;
};

const sortByTeachersAsc: SubjectsSorter = ([, subjectA], [, subjectB]) => {
  return subjectA.teachers - subjectB.teachers;
};

function getSubjectsSorter(direction: 'ASC' | 'DESC'): SubjectsSorter {
  return direction === 'ASC' ? sortByTeachersAsc : sortByTeachersDesc;
}

const subjectsArray = Object.entries(subjects).sort(getSubjectsSorter('ASC'));

console.debug(subjectsArray);
