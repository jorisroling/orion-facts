/**
 * Init the template name variable
 */
ReactiveTemplates.request('orionFacts', 'jorisroling_orionFacts_bootstrap');

/**
 * Init the role action
 */
Roles.registerAction('jorisroling.orionFacts', true);

/**
 * Register the route
 */
RouterLayer.route('/admin/facts', {
  layout: 'layout',
  template: 'orionFacts',
  name: 'jorisroling.orionFacts',
  reactiveTemplates: true
});

/**
 * Ensure user is logged in
 */
orion.accounts.addProtectedRoute('jorisroling.orionFacts');
