import StyledLink from "@/lib/components/StyledLink";
import { TextSection } from "@/lib/textSection/TextSection";

export default function ImprintPage() {
  return (
    <div className="flex w-full h-full flex-col gap-y-16 items-center justify-center mt-16">
      <div className="w-full h-full max-w-[460px] lg:max-w-[1024px] flex flex-col gap-y-16 items-center justify-center px-4">
        <TextSection headline="Inhaltsverantwortlicher">
          Timo Waszek Internetdienstleistungen <br />
          c/o IP-Management#24193 <br />
          Ludwig-Erhard-Str. 18 <br />
          20459 Hamburg <br />
          Kontakt: timo [/ @ /] waszek.de
          <br />
        </TextSection>

        <TextSection headline="Hosting">
          <div className="text-justify">
            Diese Website wird über die Amazon Web Services (AWS)
            Cloud-Infrastruktur bereitgestellt. Anbieter ist Amazon Web Services
            EMEA SARL, 38 avenue John F. Kennedy, L-1855 Luxemburg. Der Aufruf
            dieser Seite führt zur technischen Übertragung von Daten (z. B.
            IP-Adresse, Zeitpunkt des Zugriffs) an AWS. Diese Daten werden
            jedoch nicht dauerhaft gespeichert oder ausgewertet. Die
            Verarbeitung erfolgt ausschließlich zur Auslieferung der Inhalte
            dieser Website und basiert auf unserem berechtigten Interesse an
            einer stabilen und sicheren Bereitstellung (Art. 6 Abs. 1 lit. f
            DSGVO). Weitere Informationen findest du in der{" "}
            <StyledLink
              className="underline"
              href={"https://aws.amazon.com/de/privacy/"}
            >
              Datenschutzerklärung von AWS.
            </StyledLink>
          </div>
        </TextSection>

        <TextSection headline="Datenschutz & Cookies">
          <div className="text-justify">
            Diese Website verwendet keine Cookies und speichert keine
            personenbezogenen Daten. Es werden keine Analyse- oder
            Tracking-Tools eingesetzt. Beim Aufruf der Seite werden lediglich
            technisch notwendige Informationen übertragen, die zur Auslieferung
            der Website durch den Server erforderlich sind (z. B. IP-Adresse,
            Zeitstempel, angeforderte Datei). Diese Daten werden nicht
            gespeichert oder ausgewertet. Es erfolgt keine Weitergabe von Daten
            durch uns an Dritte.
          </div>
        </TextSection>

        <TextSection headline="Haftung für Links">
          <div className="text-justify">
            Dieses Angebot enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </div>
        </TextSection>

        <TextSection headline="Urheberrecht">
          <div className="text-justify">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten (zechprellerei.de) unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
            auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
            als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </div>
        </TextSection>
      </div>
    </div>
  );
}
