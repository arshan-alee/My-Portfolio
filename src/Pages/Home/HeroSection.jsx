import Resume from "../../data/Mir Arshan Ali.CV.pdf";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Arshan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A dedicated frontend developer specialized in
            <br /> crafting immersive web and mobile app experiences
          </p>
        </div>
        <div className="hero--section-cv-link">
          <a
            href={Resume}
            download="Mir Arshan Ali-CV.pdf"
          >
            <button className="btn btn-primary">Download CV</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
