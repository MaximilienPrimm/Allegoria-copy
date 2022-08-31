import "./index.scss";
import Tablette from "../../assets/tablette.png";

const Art = () => {
  return (
    <div className="body-container">
      <div className="left-side">
        <h1 className="art-description">Descriptif</h1>

        <h2 className="art-details">
          Egyptien, Basse Epoque, début de la 26e dynastie, v.664-660 av J.C
          <br></br>H.: 38 cm. - L.: 27 cm. - P.: 22cm. <br></br>Calcaire
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquet ultrices feugiat. Integer pellentesque odio ut augue finibus
          dapibus. Pellentesque sapien eros, mattis in eleifend a, rhoncus sed
          est. Morbi tristique dignissim est, sed tincidunt ipsum pulvinar non.
          Pellentesque blandit lectus nec mi tempor, non cursus tortor mattis.
          In at enim consequat magna iaculis dignissim. Integer egestas dui
          justo, at faucibus mi cursus sit amet. Proin metus lectus, eleifend ac
          orci in, consectetur placerat mi. Vestibulum a leo non nulla tristique
          rhoncus eu sed eros. Vestibulum egestas tempus nunc, vestibulum mattis
          libero. Proin eu placerat ligula. Praesent vel nisl ac risus tincidunt
          vestibulum. Aenean efficitur volutpat velit lobortis commodo. Proin
          viverra mauris tempor, elementum velit ut, pharetra nibh. Sed blandit
          ex eget mi tincidunt pellentesque. Cras nec nulla a mi efficitur
          accumsan et sed erat. Integer in sollicitudin lacus, a sollicitudin
          ipsum. Ut consequat nisi nec posuere ornare. Curabitur faucibus
          scelerisque ante, eget sollicitudin dui. Maecenas ut elit vitae felis
          placerat tempus eu nec turpis. Nullam et ultricies augue. Donec mattis
          arcu feugiat leo ultrices, vel interdum nisi dictum. Nullam a sapien
          ac turpis aliquam volutpat. Phasellus dignissim convallis est, auctor
          efficitur orci efficitur luctus. Sed bibendum ultricies blandit.
          Praesent neque lacus, convallis id arcu in, ullamcorper malesuada
          nibh. Nunc dictum lorem at urna lobortis, quis porta urna porta. Morbi
          a augue vulputate, gravida eros et, iaculis metus. Duis ut imperdiet
          lectus, vel finibus lacus. Integer sollicitudin tellus maximus tortor
          ultrices aliquam. Cras faucibus iaculis mauris a sagittis. Sed porta
          mattis sapien, et dignissim ipsum sodales quis. Vivamus fringilla
          hendrerit sem. Pellentesque ligula velit, ullamcorper vel dapibus ut,
          tincidunt venenatis tellus.
        </p>
        <button className="art-learn-more">Lire la suite</button>
        <div>
          <button className="button-acquire">Acquérir</button>
          <button className="button-propose">Proposer un Prix</button>
        </div>
      </div>
      <div className="rigth-side">
        <div className="img-container">
          <img src={Tablette} alt="img de l'art"></img>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Art;
