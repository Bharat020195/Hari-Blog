import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../../app/globals.css";
import Youtube from "../../public/Youtube.jpeg";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/Header";
import Header2 from "@/app/Header2";


const frieblog = ({ frie }) => {
  return (
    <div className="flex bg-[#bfe0e2] w-[100%] relative text-[#3b757f] right">
      <div className="fixed"><Header /></div>

      <div className="flex relative lg:ml-40 flex-col items-center">
        <div className="my-4 text-[#3b757f]">
          <ul className="flex lg:space-x-20 md:space-x-20 space-x-4 cursor-pointer">
            <Link href="/">
              <li className="hover:text-white/60">Home</li>
            </Link>
            <Link href="/Recipes">
              <li className="hover:text-white/60">Recipes</li>
            </Link>
            <Link href="/">
              <li className="hover:text-white/60">About</li>
            </Link>
            <Link href="/">
              <li className="hover:text-white/60">Subscribe</li>
            </Link>
          </ul>
        </div>
        <div className=" my-20 space-y-10 flex flex-col items-center">
          <div className="lg:text-2xl md:text-2xl text-xl font-semibold">
            {frie.attributes.Title}
          </div>
          <img
            src={`http://127.0.0.1:1337${frie.attributes.Image.data.attributes.url}`}
            alt={frie.attributes.Title}
            className="lg:w-[60%] md:w-[80%] w-full h-[500px] "
          />
          
          <div>
            <ReactMarkdown className="lg:mx-48 md:mx-10 text-xl leading-loose">
              {frie.attributes.Description}
            </ReactMarkdown>
            <div className="flex items-center justify-center border-2 border-black/80 lg:mx-72 md:mx-10 rounded-xl my-20 gap-10 p-4">
              <Image src={Youtube} alt="No Image Found" className="w-20 h-16" />
              <Link
                href={frie.attributes.Url}
                target="_blank"
                className="flex justify-center underline text-xl mt-4">
                Click on this to watch {frie.attributes.Title} recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0"><Header2/></div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { fryslug } = params;
  try {
    const response = await axios.get(
      `http://127.0.0.1:1337/api/fries?populate=deep`
    );
    const fries = response.data.data[0].attributes.recipes.data;

    const frie = fries.find( (frie) => frie.attributes.Slug === fryslug
    );

    if (!frie) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        frie,
      },
    };
  } catch (error) {
    console.error("Unable to retrieve frie data");
    return {
      notFound: true,
    };
  }
}

export default frieblog;
