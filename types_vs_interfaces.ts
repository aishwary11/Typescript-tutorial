interface Vehicle1 {
  id: number;
}
interface Car1 extends Vehicle1 {
  name: string;
}

type Vehicle2 = {
  id: number;
};
// type cannot be extends
type Car2 = Vehicle2 & {
  name: string;
};

interface Employee1 {
  id: number;
}

interface Employee1 {
  name: string;
}

type Employee2 = {
  id: number;
};
// cannot create duplicate
// type Employee2 = {
//   name: string;
// };