import ChildA from "./ChildA";

// PropDriling is basically a situation  when the data sent at almost every level due to requirement in the final level component
const Parent = () => {
  const user = {
    name: "Ajay",
    lastName: "Sharma",
    age: 30,
    profession: "Engineer",
    city: "Lucknow",
  };
  return (
    <div>
      <ChildA user={user} />
    </div>
  );
};

export default Parent;
