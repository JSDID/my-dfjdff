let Name = "Олександр";
let Famely = "Долинський";
let Person = Name + ' ' + Famely;

const NameFamely = () => {
  return (
    <>
      <h1 className="Card__title">{Person}</h1>
    </>
  );
}
export default NameFamely;