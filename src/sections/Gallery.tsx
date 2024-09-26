import { PrimaryButton } from "../components/PrimaryButton";
import "../styles/gallery.css";

export const Gallery = () => {
  return (
    <section id="gallery">
      <div id="gallery-content-container">
        <h5>
          From our oven to your table, here are a few snaps from the homemade
          delights that tell a story!
        </h5>
        <div id="gallery-actions">
          <PrimaryButton onClick={() => console.log("View gallery")}>
            View Gallery
          </PrimaryButton>
        </div>
      </div>
      <img
        id="showcase"
        src="gallery-showcase.png"
        alt="Mahi home bakes showcase"
      />
    </section>
  );
};
