/**
 * @param { String } searchWord - desired word
 * @param { String } keyword - Do search in searchWord
 * @param { isoCode } language - User Language
 */

export default function (searchText, keyword, lang = navigator.language) {
  return keyword.toLocaleLowerCase(lang).match(searchText.toLocaleLowerCase(lang))
}
