export const toFaNum = (el) => {
  if (el.match(/[0-9]/g)) {
    return this.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  } else if (el.match(/[\u0660-\u0669]/g)) {
    return this.replace(
      /[\u0660-\u0669]/g,
      (d) => "۰۱۲۳۴۵۶۷۸۹"[d.charCodeAt() - 1632]
    );
  } else {
    return this;
  }
};
