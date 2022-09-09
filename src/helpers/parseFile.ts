const renameKey = (obj: any, old_key: string, new_key: string) => {
  obj[new_key] = obj[old_key];
  delete obj[old_key];
  return obj;
};

export const parseFile = (file: string) => {
  return file.split("\n\n").map((entry, index) => {
    const obj: any = {};
    obj.id = index;
    entry.split("\n").forEach((keyValue) => {
      const split = keyValue.split(": ");
      const key = split[0];
      const value = split[1];
      obj[key] = key === "Stars" ? value.split(", ") : value;
    });

    renameKey(obj, "Title", "title");
    renameKey(obj, "Release Year", "year");
    renameKey(obj, "Format", "format");
    renameKey(obj, "Stars", "actors");
    return obj;
  });
};