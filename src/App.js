import "./App.css";
import Footer from "./footer";

const data = [
  {
    id: 1,
    first_name: "Phil",
    last_name: "Howatt",
    email: "phowatt0@studiopress.com",
  },
  {
    id: 2,
    first_name: "Evey",
    last_name: "Merck",
    email: "emerck1@delicious.com",
  },
  {
    id: 3,
    first_name: "Rahel",
    last_name: "Ciccotti",
    email: "rciccotti2@aol.com",
  },
  {
    id: 4,
    first_name: "Imelda",
    last_name: "Ladlow",
    email: "iladlow3@cbc.ca",
  },
  {
    id: 5,
    first_name: "Kristin",
    last_name: "Crannell",
    email: "kcrannell4@nps.gov",
  },
  {
    id: 6,
    first_name: "Adelind",
    last_name: "Northrop",
    email: "anorthrop5@mozilla.org",
  },
  {
    id: 7,
    first_name: "Jesselyn",
    last_name: "Skule",
    email: "jskule6@disqus.com",
  },
  {
    id: 8,
    first_name: "Jermaine",
    last_name: "Lebreton",
    email: "jlebreton7@is.gd",
  },
  {
    id: 9,
    first_name: "Jordana",
    last_name: "Enochsson",
    email: "jenochsson8@yellowpages.com",
  },
  {
    id: 10,
    first_name: "Rosella",
    last_name: "Stannion",
    email: "rstannion9@time.com",
  },
  {
    id: 11,
    first_name: "Wilek",
    last_name: "Eisak",
    email: "weisaka@stumbleupon.com",
  },
  {
    id: 12,
    first_name: "Norris",
    last_name: "Zarfat",
    email: "nzarfatb@domainmarket.com",
  },
  {
    id: 13,
    first_name: "Zahara",
    last_name: "Keeffe",
    email: "zkeeffec@usnews.com",
  },
  {
    id: 14,
    first_name: "Isacco",
    last_name: "Heinzler",
    email: "iheinzlerd@ameblo.jp",
  },
  {
    id: 15,
    first_name: "Ilario",
    last_name: "Sharram",
    email: "isharrame@bandcamp.com",
  },
  {
    id: 16,
    first_name: "August",
    last_name: "Shearmur",
    email: "ashearmurf@wired.com",
  },
  {
    id: 17,
    first_name: "Egan",
    last_name: "Shawcross",
    email: "eshawcrossg@jalbum.net",
  },
  {
    id: 18,
    first_name: "Joelie",
    last_name: "McNamara",
    email: "jmcnamarah@parallels.com",
  },
  {
    id: 19,
    first_name: "Frieda",
    last_name: "Emblen",
    email: "fembleni@ihg.com",
  },
  {
    id: 20,
    first_name: "Angelique",
    last_name: "Cossell",
    email: "acossellj@vk.com",
  },
];

// import Home from "./home";
// import Header from "./header";
// import Main from "./main";

function App() {
  return (
    <>
      <div className="container mx-auto xl:max-w-[1200px] ">
        {/* <Header />
        <Home /> */}
        <Footer />
        {/* <Main /> */}
      </div>
      {data.map((d) => (
        <Tester
          magac={d.name}
          id={d.id}
          lastname={d.last_name}
          email={d.email}
        />
      ))}
    </>
  );
}
function Tester({ magac, id, lastname, email }) {
  return (
    <div className="flex items-center gap-5">
      <p>{magac}</p>
      <p>{id}</p>
      <p>{lastname}</p>
      <p>{email}</p>
    </div>
  );
}

export default App;
