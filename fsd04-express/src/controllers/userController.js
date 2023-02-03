exports.getUser = (req, res, next) => {
  res.send({
    nama: 'Sam',
    alamat: 'Tangerang',
    pekerjaan: 'Software Developer',
    umur: 27,
  });
};
