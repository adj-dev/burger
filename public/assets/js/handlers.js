

// Set up event handlers
$(function () {
  // Click handler for `Devour` button
  $(document).on('click', '#devour', event => {
    let { id } = event.target.dataset;
    // Send id over to server-side with axios --needs to be stringified before sending
    axios({
      url: '/',
      method: 'PUT',
      configuration: JSON.stringify(id),
      data: { id }
    }).then(function () {
      location.reload();
    });
  });
});