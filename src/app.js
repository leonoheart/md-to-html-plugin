class MdToHtmlPlugin {
  constructor({ template, filename}) {
    if (!template) {
      throw new Error('template should not be empty!')
    }
    this.template = template;
    this.filename = filename || 'md.html';
  }
}

module.exports = MdToHtmlPlugin;
