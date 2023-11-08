type catInfo = {
  age: number,
  breed: string;
};
type catName = "miffy" | "boris" | "mordred";
var cats: Record<catName, catInfo> = {
  miffy: { age: 4, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 6, breed: "British Shorthair" },
};
type Result = "pass" | "fail";
var resultDetails: Result = "pass"; 