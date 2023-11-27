import Header from "../utils/Header";
import { NavBar } from "../utils/NavBar";

export function AcercaDe() {
  return (
    <div>
      <NavBar />
      <Header
        titulo="Nuestra Empresa"
        subtitulo="Estamos orgullosos de cocinar para usted."
      />
      <div className="container my-5 text-start">
        <div className="p-5 contenido-texto fs-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            tenetur? Nihil similique dolor reiciendis mollitia distinctio
            dolores deserunt labore error consequatur necessitatibus! A
            necessitatibus ut maiores, quo magnam natus voluptatum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            officiis, quidem iure deleniti earum cumque. Delectus, velit quis
            laborum quidem iusto officia maiores architecto officiis, aliquam
            sit aspernatur, odio quod! velit quis laborum quidem iusto officia
            maiores architecto officiis, aliquam sit aspernatur, odio quod!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            commodi mollitia nemo, enim cumque explicabo aliquid ullam maxime
            consequatur ducimus blanditiis ab vel autem saepe doloribus veniam
            corrupti odio quasi! Totam, at doloribus velit est deleniti iure
            cumque, fugiat blanditiis quae nemo dolor aliquid voluptatibus
            excepturi sapiente! Aperiam adipisci architecto vitae omnis,
            consequuntur saepe totam natus! Vero eaque voluptas repudiandae.
          </p>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nulla voluptas quaerat culpa maxime.
            </strong>
          </p>
        </div>
      </div>

    </div>
  );
}
