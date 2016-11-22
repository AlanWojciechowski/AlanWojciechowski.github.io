$(document).ready(function(){

  /**
    Shows the form label, in place of the placeholder, when a value has been entered into a field
  */
  $('.field').each(function(){
    var parent = $(this),
        field = parent.find('input, select');

    // Focus: Show label
    field.focus(function(){
      parent.addClass('show-label');
    });

    // Blur: Hide label if no value was entered (go back to placeholder)
    field.blur(function(){
      if (field.val() === '') {
        parent.removeClass('show-label');
      }
    });

    // Handles change without focus/blur action (i.e. form auto-fill)
    field.change(function(){
      if (field.val() !== '') {
        parent.addClass('show-label');
      } else {
        parent.removeClass('show-label');
      }
    });
  });

  /*-----
    Extra JS helpers, not directly related to placeholder labels
  -----*/

  // Support placeholders in IE8 via https://github.com/mathiasbynens/jquery-placeholder
  $('input, textarea').placeholder();

  // Add class no-selection class to select elements
  $('select').change(function(){
    var field = $(this);
    if (field.val() === '') {
      field.addClass('no-selection');
    }
    else {
      field.removeClass('no-selection');
    }
  });
});