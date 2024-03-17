export const goToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section?.offsetTop, window.scrollTo);
  if (!section) return;
  window.scrollTo({
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
