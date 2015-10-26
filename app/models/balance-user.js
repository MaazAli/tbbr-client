import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
  userId: DS.belongsTo('user'),
  relatedUserId: DS.attr('number'),
  groupId: DS.attr('number')
});
