const importAll = (r) => r.keys().map(r);

const allImages = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const filterImagesByFirstLetter = (images, letter) => {
  return images.filter((image) => {
    // Extract the filename from the image path and check the first letter
    const filename = image.split("/").pop();
    return filename.toLowerCase().startsWith(letter.toLowerCase());
  });
};

export const GalerijaItemsIzkopi = filterImagesByFirstLetter(
  allImages,
  "i"
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));

export const GalerijaItemsRusenje = filterImagesByFirstLetter(
  allImages,
  "r"
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));

export const GalerijaItemsUrejanje = filterImagesByFirstLetter(
  allImages,
  "u"
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));

export const GalerijaItemsPrevozi = filterImagesByFirstLetter(
  allImages,
  "p"
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));

export const GalerijaItemsSkarpe = filterImagesByFirstLetter(
  allImages,
  "s"
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));

export const GalerijaItemsAgro = filterImagesByFirstLetter(allImages, "a").map(
  (image, index) => ({
    title: `Toplar${index + 1}`,
    image,
    besedilo: "Toplar",
  })
);
