/*$(function () {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date+' '+time;
  $("#form_datetime").datetimepicker({
      format: 'yyyy-mm-dd hh:ii',
      autoclose: true,
      todayBtn: true,
      startDate: dateTime
  });
});*/


$(document).ready(function(){
    
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
		
	});
});


//----------------------------------------------------------------------------------------------------

                              
									
									