export default function handler(req, res) {
  res.redirect(req.query.redirectUrl);
}
