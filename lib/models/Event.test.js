const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('requires a recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('requires a dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('requires a rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -5
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-5) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 10
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (10) is more than maximum allowed value (5).');
  });
});
