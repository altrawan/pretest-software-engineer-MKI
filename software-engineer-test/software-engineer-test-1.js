// Remove key that have null or undefined value
const arr = [
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

function removeUndefinedOrNullValue(key, value) {
  if (value === null || value === undefined) {
    return undefined;
  }

  return value;
}

let cleanedObject = JSON.stringify(arr, removeUndefinedOrNullValue, 4);

console.log(cleanedObject);
