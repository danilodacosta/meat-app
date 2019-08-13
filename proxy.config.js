const proxy = [
  {
    context: '/api',
    target: 'https://10.0.20.82:8080',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
