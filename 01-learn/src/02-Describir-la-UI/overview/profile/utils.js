export const getimageUrl = (person, size = "s") => {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
};
