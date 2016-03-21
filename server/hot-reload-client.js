module.exports = function filter(req, res, next) {
  console.log(req.url);
  if (req.url !== '/hot-reload') return next();
  var script = `(${bootstrap.toString()})(System);`.replace('HOSTNAME', req.headers.host);

  res.writeHead(200, {
    'Content-Length': script.length,
    'Content-Type': 'text/javascript'
  });
  res.write(script);
  res.end();
};

function bootstrap(System) {
  if (!System || !System.import instanceof Function) {
    console.warn("System object not found");
    return;
  }
  System.trace = true;

  var preload = System.import('capaj/systemjs-hot-reloader').then(function(HotReload) {
    System['@hotLoader'] = new HotReload.default('http://HOSTNAME')
  });

  System.live = function(module) {
    return preload.then(function() {
      return System.import(module);
    });
  };
};