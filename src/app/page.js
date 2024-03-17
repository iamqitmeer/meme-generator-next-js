import Image from "next/image";
import Link from "next/link";

async function Homepage() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();

  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <div className="memeSec">
          {response.data.memes.map((item) => {
            return (
              <div className="memeBox">
                <Image
                  src={item.url}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
                <h2>{item.name}</h2>
                {/* <h2>{item.id}</h2> */}
                <Link href={`/meme-editor?url=${item.url}`}> Create Meme </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
