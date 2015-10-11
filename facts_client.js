/**
 * Register the link
 */
Tracker.autorun(function() {
  orion.links.add({
    index: 9120,
    identifier: 'orion-facts',
    title: 'Facts',
    routeName: 'jorisroling.orionFacts',
    activeRouteRegex: 'jorisroling.orionFacts',
    permission: 'jorisroling.orionFacts'
  });
});
