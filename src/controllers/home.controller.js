const pages = {}

pages.home = (_, res) => {
  res.render('home')
}

pages.about = (_, res) => {
  res.render('about')
}

module.exports = pages