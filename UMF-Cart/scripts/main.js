var sfw;
$(document).ready(function () {
    var form = $("#wizard_example");
    form.validate();
    sfw = $("#wizard_example").stepFormWizard({
        theme: 'umf',
        markPrevSteps: true,
        linkNav: 'prev',
        height: 'auto',
        onNext: function () {
            var valid = form.valid();
            // if use height: 'auto' call refresh metod after validation, because validation can change content
            sfw.refresh();
            return valid;
        },
        onFinish: function () {
            var valid = form.valid();
            // if use height: 'auto' call refresh metod after validation, because validation can change content
            sfw.refresh();
            return valid;
        }
    });

    // Company Checkbox expand/collapse
    $('#companycheckbox').change(function () {
        $('#companycheckboxdiv').slideToggle(function () {
            sfw.refresh();
            $("input#registrant_company").prop('required', true);
        });
    });
    
    $('#specialInstrbox').change(function () {
        $('#specialInstrdiv').slideToggle(function () {
            sfw.refresh();
            $("input#giftOptions-specialInstrText").prop('required', true);
        });
    });
    
    $('#memorialInstrbox').change(function () {
        $('#memorialInstrdiv').slideToggle(function () {
            sfw.refresh();
            $("input#tribute-name").prop('required', true);
        });
    });
    
    
    $('#memorialNotebox').change(function () {
        $('#memorialNotediv').slideToggle(function () {
            sfw.refresh();
        });
    });
    
    
    
    // Radio box border
    $('.method').on('click', function () {
        $('.method').removeClass('select-border');
        $(this).addClass('select-border');
    });


    $('input[type="radio"]').click(function () {
        if ($(this).attr("value") === "one-time") {
            $(".box").not(".one-time").hide();
            $(".one-time").show();
            sfw.refresh();
        }
        if ($(this).attr("value") === "monthly") {
            $(".box").not(".monthly").hide();
            $(".monthly").show();
            sfw.refresh();
        }
        if ($(this).attr("value") === "payroll") {
            $(".box").not(".payroll").hide();
            $(".payroll").show();
            sfw.refresh();
        }
    });
    
    
    
    
    
    $(document).ready(function () {
       $(".txt").each(function () {
           $(this).keyup(function () {
               calculateSum();
           });
       });
   });

   function calculateSum() {
       var sum = 0;
       $(".txt").each(function () {
           if (!isNaN(this.value) && this.value.length != 0) {
               sum += parseFloat(this.value);
           }
       });
       $(".sum").html(sum.toFixed(2));
   };
    
     $('#sortable').on('click', '.itemDelete', function() {
        $(this).closest('li').fadeOut("slow",function(){
            $(this).closest('li').remove();
        });
    });
    
   
    

})