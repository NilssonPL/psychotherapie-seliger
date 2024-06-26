import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex h-[30vh] md:h-[80vh] bg-[url('/psychotherapie-seliger/raum2.jpg')] bg-cover bg-center md:bg-fixed text-white">
        <div className="m-auto grid-flow-row [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          <div className="text-xs md:text-xl">
            Ute Seliger, Psychologische Psychotherapeutin
          </div>
          <div className="text-2xl md:text-7xl">Praxis für Psychotherapie</div>
        </div>
      </div>
      <div id="about_me" className="px-20 py-28 ">
        <div className="grid grid-flow-row md:grid-flow-col md:gap-8 items-center justify-items-center">
          <div>
            <Image
              src="/psychotherapie-seliger/person.jpg"
              alt="Person"
              width={0}
              height={0}
              sizes="100%"
              className="h-auto max-h-[70vh] w-auto rounded-[50%]"
            />
          </div>
          <div>
            <div className="text-2xl pb-2">Philosophie</div>
            <div>
              Psychotherapie bedeutet für mich einen sicheren Raum zu gestalten,
              indem Sie ihre Probleme und Herausforderungen unbefangen anschauen
              können. Dabei ist mir ein gemeinsames Verstehen ihrer Problematik
              in der Ursache, sowie der auslösenden und aufrechterhaltenden
              Faktoren wichtig. Hierzu sollen Gefühle gelebt, Gedanken
              ausgesprochen und Verhalten gezeigt werden können, um
              Veränderungen anzustoßen und neue Denk- und Verhaltensweisen
              aufbauen zu können. Ich verwende die Methode der
              Verhaltenstherapie und lasse hierzu emotionsfokussierten
              Techniken, sowie schematherapeutische und ACT- basierende Elemente
              einfließen. Generell ist mir jedoch ein individuelles Vorgehen
              wichtig, da der Zugang zu sich selbst von Mensch zu Mensch
              unterschiedlich ist.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-full h-[40vw] content-center bg-red-600">
        Über mich
      </div>
      <div className="flex bg-black p-8 text-white gap-4 justify-end">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </main>
  );
}
