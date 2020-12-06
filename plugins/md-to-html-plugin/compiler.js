const reg_mark = /^(.+?)\s/;
const reg_sharp = /^\#/;

function createTree (mdArr) {
  let _htmlPool = {};
  let _lastMark = '';

  mdArr.forEach((mdFragment) => {
    const matched = mdFragment.match(reg_mark);
    if (matched) {
      const mark = matched[1];
      const input = matched['input'];

      if (reg_sharp.test(mark)) {
        const tag = `h${mark.length}`;
        const tagContent = input.replace(reg_mark, '');

        if (mark === _lastMark) {
          _htmlPool[tag].tags = [..._htmlPool[tag].tags, `<${tag}>${tagContent}</${tag}`];
        } else {
          _lastMark = mark;
          _htmlPool[tag] = {
            type: 'single',
            tags: [`<${tag}>${tagContent}</${tag}`]
          }
        }
      }
    }
  })
  console.log('_htmlPool', _htmlPool)
}

function compileHTML (_mdArr) {
  const _htmlPool = createTree(_mdArr);
}

module.exports = {
  compileHTML,
};