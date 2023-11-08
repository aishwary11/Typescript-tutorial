type Starwars = {
  title: string,
  action: boolean;
};
const updateData = (id: number, starwars: Partial<Starwars>) => console.log(id, starwars);

updateData(1, { title: "Starwar Fight", action: false });

const option = (id1: number, id2?: number) => console.log(id1, id2);
option(11);