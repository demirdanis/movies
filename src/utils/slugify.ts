import slugify from "slugify";

const slugifyProps = {
  replacement: "-",
  remove: /[*+~.()'"!:@]/g,
  lower: true,
  strict: true,
  trim: true,
  locale: "en",
};

export const prepareMovieTitleSlug = (title: string) => {
  return slugify(title, slugifyProps);
};
