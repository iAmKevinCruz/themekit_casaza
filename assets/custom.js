/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
$('ul.Blog__TagList.HorizontalList.HorizontalList--spacingExtraLoose').each(function() {
    var select = $(document.createElement('select')).insertBefore($(this).hide());
    select.addClass('wm-custom-select-filtter');
	$(document.createElement('option')).appendTo(select).val('').html('Filter By');
    $('>li a', this).each(function() {
      var selected = '';
      if($(this).hasClass('is-active')){
        $(document.createElement('option')).appendTo(select).attr('selected','selected').val(this.href).html($(this).html());

      }else{
        $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html());
      }
    });
});
$('ul.Blog__TagList.HorizontalList.HorizontalList--spacingExtraLoose ').val()
$(document).on('change', '.wm-custom-select-filtter', function() {
  if( $(this).find("option:selected").val() != ''){
 	 window.location = $(this).find("option:selected").val();
  }
});