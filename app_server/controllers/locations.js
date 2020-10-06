/* GET Locations pages */
const sengni = (req, res) => res.render('sengni', { title: 'Seng ni'});
const sengalam = (req, res) => res.render('index', { title: 'Seng a lam'});
const ningmu = (req, res) => res.render('index', { title: 'Seng a ntsa ning mu ni'});

module.exports = {
  sengni,
  sengalam,
  ningmu,
};
