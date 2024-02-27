import "./globals.css";
import Header from "./Header";
import Header2 from "./Header2";




export const metadata = {
  title: "Hari's Cook Book",
  description: "Created with Immense Love By Bharat",
};

export default function RootLayout({ children }) {
  return (
    <html>

      <body  className="bg-[#bfe0e2] flex"> 
      <Header/>
     {children}  <Header2/></body>
     
      
    </html>
  );
}
