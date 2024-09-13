import { PERSONAL_DATA as BIO_DATA } from "../data/Data";
import myPic from "../assets/myPic.jpg";

const Bio = () => {
  return (
    <section
      id="Bio"
      className="mx-auto flex max-w-3xl snap-start flex-col gap-8 p-4 md:flex-row-reverse md:items-center md:gap-2"
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
          {BIO_DATA.name}
        </h1>
        <p className="text-center text-sm">{BIO_DATA.discription}</p>
      </div>
    </section>
  );
};

export default Bio;
