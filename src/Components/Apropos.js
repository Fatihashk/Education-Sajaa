import React from "react";
import Navbar from "./Navbar";
import "../Styeles/main.css";
import "../Styeles/about.css";
import img3 from "../IMAGES/prof4.jpg";
import img2 from "../IMAGES/student.jpg";
import img4 from "../IMAGES/tushr.jpg";
function Apropos() {
  return (
    <div className="aprops">
      <div>
        <Navbar />
      </div>

      <div className="centred">
        <h3 className="h3">À propos:</h3>
        <p>
          L'école privée Asajaa offre des places pédagogiques à des enfants
          déscolarisés et leur permet de reprendre une scolarité dans les mêmes
          conditions que les autres élèves.
        </p>
      </div>
      <div className="paragraphe">
        <div className="paragraphe-text">
          <h2>Permettre aux enfants d'apprendre autrement:</h2>
          <p>
            C’est la raison d'être de cet établissement Nous avons voulu une
            pédagogie qui donne à chacun sa chanceElle est unique car inspirée
            du meilleur des pédagogies connues aujourd’hui.Nous les avons
            personnellement étudiées avant de faire notre choix. C’est, au
            final,la pédagogie qui a retenu toutenotre attention.
          </p>
          <h4>
            “ Je vois, je comprends, je sais faire, je pratique et enfin je
            maîtrise”.
          </h4>
        </div>
        <img src={img2} />
      </div>
      <p className="left">
        Une grande place est faite à la pratique, à l’exploration parl’enfant
        lui-même de ce qu’il doit acquérir S’approprier les connaissances en les
        testant, c’est de cette manière que vos enfants progresseront et
        réussiront. Notre approche tient compte de ce qu’ils savent déjà faire,
        de leurs compétences, pour adapter l’enseignement à leur propre rythme
        d’apprentissage.
      </p>
      <div className="left">
        <h2>LE PLAISIR D’APPRENDRE</h2>
        <p>
          Les enfants sont actifs dans leur progression. Ils acquièrent des
          connaissances solides sans avoir l’impression d’apprendre mais
          simplement parce qu’ils sont impliqués dans les activités proposées.
          Nos pratiques développent la créativité de chacun ainsi que
          l’autonomie mais surtout la joie et le plaisir d’apprendre ! En effet,
          comme dans la pédagogie, nous utilisons un matériel particulier qui
          rappelle le jeu. Tout en couleur, il donne envie d’apprendre et de
          connaître encore plus de choses.
        </p>
      </div>
      <div className="paragraphe">
        <img src={img3} />
        <div className="paragraphe-text">
          <h2>Les enseignants choisis pour leur engagement</h2>
          <p>
            La tâche a été et reste rude car nous sommes d’une vigilance
            absolue. Nos critères<br></br> de recrutement sont avant tout
            l’amour du métier et la volonté des'impliquer dans cette pédagogie.
            Pour cela, des professionnels viennent, plusieurs fois dans l’année,
            les former et vérifier la mise en pratique de l’approche pour les
            mathématiques mais aussi le français, lecture et grammaire.
          </p>
        </div>
      </div>
      <div className="paragraphe">
        <div className="paragraphe-text">
          <h2>LE PLAISIR D’ENSEIGNER</h2>
          <p>
            votre pédagogie nécessite des professeurs engagés dans la réussite
            des enfants.Plus que délivrer un savoir, ils sont à l’écoute de
            chacun, s’adaptent au rythme de chaque enfant pour lui permettre
            d’apprendre mais surtout de retenir. La journée s’organise selon une
            alternance de travail individuel et collectif, avec des activités
            propres à chaque classe ou communes à deux classes. Des ateliers
            variés sont régulièrement mis en place. Développer la créativité, la
            confiance en soi et l’esprit d’initiative sont au coeur de notre
            projet éducatif.
          </p>
        </div>
        <img src={img4}></img>
      </div>
      <div className="left">
        <h2>Ce que l’on apprend ici n’est pas uniquement scolaire</h2>
        <p>
          Les enfants connaissent tous les enseignants de l’école Sajaa. Ils
          savent qu’ils peuventfaire confiance à tous, en respectant aussi les
          exigences de chacun. Ils développent ainsi le sens des
          responsabilités, le respect des règles de vie en société et acquièrent
          un esprit créatif, capable d’initiatives.
        </p>
        <h2>UN VÉRITABLE MODE DE VIE POUR LES ENFANTS</h2>
        <p>
          Le cadre de vie, l’organisation du temps scolaire, l’importance
          accordée à la vie sociale,l’ouverture de l’école sur le monde : tous
          ces choix fondamentaux permettent de créer un climat de confiance qui
          favorise l’apprentissage de la vie sociale, la confiance en soi et
          l’épanouissement personnel.
        </p>
      </div>
    </div>
  );
}
export default Apropos;
