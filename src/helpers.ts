export const goToSection = (id: string) => {
  const main = document.getElementById('main');
  const section = document.getElementById(id);
  if (!section || !main) return;
  main.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
};

export const isMobile = () =>
  navigator.userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
  );

export const openContact = () => {
  window.open("tel:+919443178774");
};
