exports.helloWorld = (req, res, next) => {
  res.send('<h1>Hello Jakarta!</h1>');
};

exports.aboutMe = (req, res, next) => {
  res.send({
    name: 'Samuel',
    alamat: 'Tangerang',
  });
};
