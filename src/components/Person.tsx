import PersonData from "../data/PersonData";
import myPic from "../assets/myPic.jpg";

const Person = () => {
  return (
    <div
      id="Person"
      className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 p-4 xl:flex-row-reverse"
    >
      <div className="flex w-full justify-center">
        <img
          src={myPic}
          className="lg w-1/2 rounded-full mix-blend-darken shadow-lg shadow-fuchsia-700 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-full"
          alt="myPic"
        />
      </div>
      <div className="flex h-full w-full flex-col gap-2 text-white">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
          {PersonData.name}
        </h1>
        <p className="text-sm">{PersonData.discription}</p>
        <p className="text-sm">{PersonData.discription}</p>
        <p className="text-sm">{PersonData.discription}</p>
      </div>
    </div>
  );
};

export default Person;
