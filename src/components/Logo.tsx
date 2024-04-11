const IS_PRIMARY_DOMAIN = import.meta.env.VITE_APP_IS_PRIMARY
  ? true
  : window.location.origin.includes("web.app");

export const Logo = () => {
  if (IS_PRIMARY_DOMAIN) {
    return (
      <img
        id="logo"
        loading="eager"
        src="/logo-alt.png"
        alt="Mahi Home Bakes logo"
      />
    );
  }
  return (
    <img
      id="logo_alt"
      loading="eager"
      src="/logo_rect_3_2_trans.png"
      alt="Mahi Home Bakes logo"
    />
  );
};
