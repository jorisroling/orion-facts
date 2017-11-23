Package.describe({
  name: 'jorisroling:orion-facts',
  summary: 'Meteor Facts in Orion',
  version: '0.0.5',
  git: 'https://github.com/jorisroling/orion-facts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['meteor-platform', 'orionjs:base@1.6.0','nicolaslopezj:roles@2.0.0', 'facts']);

  api.use(['orionjs:bootstrap@1.6.0'], 'client', { weak: true });

  api.addFiles('facts.js');
  api.addFiles('facts_server.js', 'server');
  api.addFiles(['facts_bootstrap.html','facts.css','facts_client.js'], 'client');
  
});
