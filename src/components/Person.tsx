import PersonData from "../data/PersonData";
import myPic from "../assets/myPic.jpg";

const Person = () => {
  return (
    <section
      id="Person"
      className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 p-4 md:flex-row-reverse md:items-center md:gap-2"
    >
      <div className="flex w-full justify-center">
        <img
          height={300}
          width={300}
          src={myPic}
          className="rounded-full shadow-lg shadow-fuchsia-700 md:w-full"
          alt="LeonTrestmanPic"
        />
      </div>
      <div className="flex w-full flex-col gap-2 text-white lg:justify-center">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
          {PersonData.name}
        </h1>
        <p className="text-center text-sm">{PersonData.discription}</p>
      </div>
    </section>
  );
};

export default Person;
