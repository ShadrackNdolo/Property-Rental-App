import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.attr(),
    city: DS.attr(),
    type: DS.attr(),
    totalRooms: DS.attr(),
    bedrooms: DS.attr(),
    image: DS.attr()
});
