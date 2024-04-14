import { PrimaryButton } from "../components/PrimaryButton";
import "../styles/gallery.css";

export const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-content-container">
        <h5>
          From our oven to your table, here are a few snaps from the homemade
          delights that tell a story!
        </h5>
        <PrimaryButton onClick={() => console.log("View gallery")}>
          View Gallery
        </PrimaryButton>
      </div>
      <img
        id="showcase"
        src="gallery-showcase.png"
        alt="Mahi home bakes showcase"
      />
    </section>
  );
};
