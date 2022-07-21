// Remove key that have null or undefined value
const data = [
  {
    session_name: 'first test',
    classes: [
      {
        class_name: undefined,
        students: [
          {
            student_name: 'John',
          },
        ],
      },
    ],
  },
  {
    session_name: null,
    classes: [
      {
        class_name: 'second class',
        students: [
          {
            student_name: 'Doe',
          },
        ],
      },
    ],
  },
];
