const banners = [
  {
    img: '/assets/images/banner/banner1.webp',
    alt: 'Banner image 1',
    caption: 'Home-crafted delights with a dash of love',
  },
  {
    img: '/assets/images/banner/banner2.webp',
    alt: 'Banner image 2',
    caption: 'Fresh, eggless and no preservatives',
  },
  {
    img: '/assets/images/banner/banner3.webp',
    alt: 'Banner image 3',
    caption: 'Savour the taste of pure indulgence',
  },
  {
    img: '/assets/images/banner/banner4.webp',
    alt: 'Banner image 4',
    caption: 'Served from our home to yours',
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const height = document.documentElement.clientHeight;
  const banner = document.getElementById("banner-item");
  const bannerImage = document.getElementById("banner-image");
  const bannerCaption = document.getElementById("banner-caption");
  const bannerCaptionContainer = document.getElementById("banner-caption-container");

  window.scrollTo({ top: 0, behavior: 'smooth' });

  bannerImage.classList.add("fade-in");
  bannerCaption.classList.add("fade-in");
  bannerCaptionContainer.classList.add("fade-in");


  function updateBannerContent(index) {
    const { img, alt, caption } = banners[index];
    bannerImage.src = img;
    bannerImage.alt = alt;
    bannerCaption.textContent = caption;
  }

  let currentBanner = 0;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 4 * height - 300) {
      banner.classList.add("hidden");
    } else {
      banner.classList.remove("hidden");
    }
    const index = Math.floor(window.scrollY / height);
    if (currentBanner !== index) {
      currentBanner = index;
      if (index > 3) return;
      bannerImage.classList.remove("fade-in");
      bannerCaption.classList.remove("fade-in");
      bannerCaptionContainer.classList.remove("fade-in");
      updateBannerContent(index);
      setTimeout(() => {
        bannerImage.classList.add("fade-in");
        bannerCaption.classList.add("fade-in");
        bannerCaptionContainer.classList.add("fade-in");
      }, 1);
    }
  })


  const products = document.getElementsByClassName("product");
  const productsContainer = document.getElementById("products-container");

  if (!products.length) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        Array.from(products).forEach((product) => {
          product.classList.add("fade");
        });
      } else {
        Array.from(products).forEach((product) => {
          product.classList.remove("fade");
        });
      }
    },
    {
      root: null,
      threshold: 0.20,
    }
  );

  observer.observe(productsContainer);
});