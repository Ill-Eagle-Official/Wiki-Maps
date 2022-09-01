(() => {

  // AJAX POST request when submit button is clicked

  $('.submission-form').on('submit', function(event) {
    event.preventDefault();
    let data = $(this).serialize();
    console.log(data);
    $.ajax({
      url: '/api/maps',
      method: 'POST',
      data: data
    }).done((response) => {
      console.log(response);
      window.location.href = `/maps/${response.map_id}`;
    });
  });

});
