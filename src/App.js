import "./App.css";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import Footer from "./Components/Footer";

function App() {
  const products = [
    {
      rbr: 1,
      naslov: "Granule",
      opis:
        "Granule sa ukusom jagnjetine, piletine, ribe i teletine. Napravljene pažljivo i s ljubavlju, pružiće vašem ljubimcu sve potrebne vitamine i minerale. Za njihovu pripremu korišćeno je najkvalitetnije meso, i garantujemo da će ih Vaš pas obožavati!",
        slika:"../img/p1.PNG",
      kolicina: 1520,
      cena:650,
    },
    {
      rbr: 2,
      naslov: "Vlažna hrana za pse",
      opis:
        "Ukusna i mekana mešavina boranije, graška i šargarepe, sa najvećim udelom mesa, piletine ili jagnjetine. Ljubimci je jedu u jednom dahu, a posebno se preporučuje mladim psima, jer su ove poslastice odlične za rast i razvoj",
        slika:"../img/p2.PNG",
           kolicina: 950,
           cena:1050,

    },
    {
      rbr: 3,
      naslov: "Vitamini",
      opis:
        "Kombinacija 9 različitih vitamina i minerala neophodnih za zdravlje vašeg psa. Ne uzimati na svoju ruku,odnosno bez savetovanja sa vašim izabranim veterinarom. U kutiji možete naći uputstvo i 40 tableta, a upotreba zavisi od rase, visine i težine psa, kao i od specijalnih potreba. ",
        slika:"../img/p3.PNG",
        kolicina: 230,
        cena:1230,
    },
    {
      rbr: 4,
      naslov: "Nagrade za pse",
      opis:
        "Želite da naučite psa raznim trikovima? Onda su ovi slatkiši odličan izbor za Vas! Nema psa koji ih neće obožavati, ali budite pažljivi sa dnevnom količinom koju dalete Vašem ljubimcu. O tome se možete informisati na pakovanju.",
        slika:"../img/p4.PNG",
        kolicina: 560,
        cena:400,
    },
  ];

  return (
    <div className="App">
      <Header />
      <AllProducts products={products} />
     <Footer/>
    </div>
  );
}

export default App;