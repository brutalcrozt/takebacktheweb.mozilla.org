;(function(window, document, $) {

    //
    // Shared
    //

    if ( $('form#signup').length || $('form[name=contribution]').length ) {
        $('form#signup, form[name=contribution]').wrap('<div class="bsdbs-action-container"></div>');
        $('#signupheader, .bsd-contribForm-aboveContent').wrap('<div class="bsdbs-content-container"></div>');

        $('.bsdbs-action-container').wrapInner('<div class="bsdbs-action"></div>');
        $('.bsdbs-content-container').wrapInner('<div class="bsdbs-content"></div>');

        $('form#signup').addClass("bsdbs-form-signup");
        $('body').addClass('page-bsdbs-signup');

        // make fields behave like normal bootstrap fields
        $('.fieldset').addClass('form-group');
        $('.label').removeClass('label');
        $('input[type=submit], input[type=button]').addClass('btn btn-danger');

        // todo: this needs a little more refinement than full-width-ing everything
        // can we add a half width for zip?
        $('.input input').addClass('form-control');
        $('.btn').removeClass('form-control');

        // fix addr 2
        $('input#addr2').addClass('form-control');
        $('input#addr2').wrap('<div class="form-group"></div>');

        // move error into top of the form
        $('.signuperror').prependTo('bsdbs-form-signup');

        // Add form-control to all selects
        $('select').addClass('form-control').wrap('<div class="styled-select"></div>');

    }

    //
    // Signup
    //

    if ( $('form#signup').length ) {

        // check for both first and last, put on one line
        if ( $('#bsd-field-firstname').length && $('#bsd-field-lastname').length ) {
            var rowFirstLast;
            rowFirstLast = '<tr id="custom-first-last"><td><div class="row">';
            rowFirstLast += '<div id="custom-first" class="col-xs-6"></div>';
            rowFirstLast += '<div id="custom-last" class="col-xs-6"></div>';
            rowFirstLast += '</div></td></tr>';
            $('#bsd-field-firstname').closest('table').closest('tr').hide();
            $('#bsd-field-lastname').closest('table').closest('tr').hide();
            $('#signuptable tbody').eq(0).prepend(rowFirstLast);
            $('#bsd-field-firstname').appendTo('#custom-first');
            $('#bsd-field-lastname').appendTo('#custom-last');
        }


        if ( $('#bsd-field-zip').length && $('#bsd-field-email').length ) {

            // check for email, full address, else is just email/zip
            if ( $('#bsd-field-state_cd').length && $('#bsd-field-city').length && $('#bsd-field-email').length ) {
                //console.log('make 3 fields on one row');
                var rowCityStateZip;
                rowCityStateZip = '<tr id="custom-city-state-zip"><td><div class="row">';
                rowCityStateZip += '<div id="custom-city" class="col-xs-12 col-sm-5"></div>';
                rowCityStateZip += '<div id="custom-state" class="col-xs-6 col-sm-3"></div>';
                rowCityStateZip += '<div id="custom-zip" class="col-xs-6 col-sm-4"></div>';
                rowCityStateZip += '</div></td></tr>';
                $('#bsd-field-city').closest('table').closest('tr').hide();
                $('#bsd-field-state_cd').closest('table').closest('tr').hide();
                $('#bsd-field-zip').closest('table').closest('tr').hide();
                if ( $('#bsd-field-addr1').length ) {
                    $('#bsd-field-addr1').closest('table').closest('tr').addClass('custom-addr');
                    $(rowCityStateZip).insertAfter('.custom-addr');
                }
                $('#bsd-field-city').appendTo('#custom-city');
                $('#bsd-field-state_cd').appendTo('#custom-state');
                $('#bsd-field-zip').appendTo('#custom-zip');

                // also need to shortlen labels for zip, while handling required
                if ( $('#bsd-field-state_cd label.field .required').length ) {
                    $('#bsd-field-state_cd label.field').html('State <span class="required">*</span>');
                } else {
                    $('#bsd-field-state_cd label.field').text('State');
                }
            } else {
                var rowEmailZip;
                rowEmailZip = '<tr id="custom-email-zip"><td><div class="row">';
                rowEmailZip += '<div id="custom-email" class="col-xs-8"></div>';
                rowEmailZip += '<div id="custom-zip" class="col-xs-4"></div>';
                rowEmailZip += '</div></td></tr>';
                $('#bsd-field-email').closest('table').closest('tr').hide();
                $('#bsd-field-zip').closest('table').closest('tr').hide();
                if ( $('#custom-first-last').length ) {
                    $(rowEmailZip).insertAfter('#custom-first-last');
                } else {
                    $('#signuptable tbody').eq(0).prepend(rowEmailZip);
                }
                $('#bsd-field-email').appendTo('#custom-email');
                $('#bsd-field-zip').appendTo('#custom-zip');
            }
        }
    }

    //
    // Contribution
    //

    if ( $('form[name=contribution]').length ) {

        $('form[name=contribution]')
            .find('input[type=tel], input[type=email], input[type=text], input[name=state_cd], select')
            .addClass('form-control')
            //.parent().wrapInner('<div class="form-group"></div>');

        // Remove bsd styles
        jQuery(".text").removeClass("text");

        // Fix the select that bsd delay-loads
        setTimeout(function() {
            //$('form[name=contribution] select').addClass('form-control');
            $('select').addClass('form-control').css('margin-bottom', 0).wrap('<div class="styled-select"></div>');
            $('select#state_cd option[value=""]').text("State");
            $('#custom-state label').hide();
            $('label.fieldlabel').addClass('sr-only');
        }, 500);

        $('.form-control').each(function() {
            var $input = $(this);
            var $label = $input.closest("td").find("label.fieldlabel");
            var placeholder = $label.text();
            console.log(placeholder);
            if ( $input.val() == ""){
                $input.attr("placeholder", placeholder);
            }
        });
        $('label.fieldlabel').addClass('sr-only');
        $('#amounts label').removeClass('sr-only');

        $('.custom-addr label').hide();

        // var $td3 = $('.amounts tr:eq(1) td:eq(2)');
        // var $td4 = $('.amounts tr:eq(1) td:eq(3)');
        // var $td4Label = $('.amounts tr:eq(1) td:eq(3) label');
        // var $td4Input = $('.amounts tr:eq(1) td:eq(3) #amt_other_text');
        // //$td3.children().hide();
        // $td3.css();
        // $td4.attr('colspan',2);
        // $td4.children().detach();

        // $td4Label.appendTo($td4);
        // $td4Input.appendTo($td4);

        // $td4Input.keyup(function() {
        //     if (!(this.value == '')) {
        //         document.contribution.amount[7].checked=true;
        //         console.log('set to true');
        //     }
        // });

        // check for both first and last, put on one line
        if ( $('#firstname').length && $('#lastname').length ) {
            var rowFirstLast;
            rowFirstLast = '<tr id="custom-first-last"><td><div class="row">';
            rowFirstLast += '<div id="custom-first" class="col-xs-6"><label class="fieldlabel">First</label></div>';
            rowFirstLast += '<div id="custom-last" class="col-xs-6"><label class="fieldlabel">Last</label></div>';
            rowFirstLast += '</div></td></tr>';
            $('#firstname').closest('table').closest('tr').hide();
            $('#lastname').closest('table').closest('tr').hide();
            $('#bsd-contribution-section-header-contributor').after(rowFirstLast);
            $('#firstname').appendTo('#custom-first');
            $('#lastname').appendTo('#custom-last');
        }

        // check for email, full address, else is just email/zip
        if ( $('#state_cd').length && $('#city').length && $('#email').length ) {
            //console.log('make 3 fields on one row');
            var rowCityStateZip;
            rowCityStateZip = '<tr id="custom-city-state-zip"><td><div class="row">';
            rowCityStateZip += '<div id="custom-city" class="col-xs-12 col-sm-5"><label class="fieldlabel">City</label></div>';
            rowCityStateZip += '<div id="custom-state" class="col-xs-6 col-sm-3"><label class="fieldlabel">State</label></div>';
            rowCityStateZip += '<div id="custom-zip" class="col-xs-6 col-sm-4"><label class="fieldlabel">Zip</label></div>';
            rowCityStateZip += '</div></td></tr>';
            $('#city').closest('table').closest('tr').hide();
            $('#state_cd').closest('table').closest('tr').hide();
            $('#zip').closest('table').closest('tr').hide();
            if ( $('#addr1').length ) {
                $('#addr1').closest('table').closest('tr').addClass('custom-addr');
                $(rowCityStateZip).insertAfter('.custom-addr');
            }
            $('#city').appendTo('#custom-city');
            $('#state_cd').appendTo('#custom-state');
            $('#zip').appendTo('#custom-zip');

            // also need to shortlen labels for zip, while handling required
            if ( $('#state_cd label.field .required').length ) {
                $('#state_cd label.field').html('State <span class="required">*</span>');
            } else {
                $('#state_cd label.field').text('State');
            }

            // Expiration on one row
            var rowExpiration;
            rowExpiration = '<tr id="custom-expiration"><td><div><label class="fieldlabel">Expiration<br></label></div>';
            rowExpiration += '<div class="row">';
            rowExpiration += '<div id="custom-exp-month" class="col-xs-6"></div>';
            rowExpiration += '<div id="custom-exp-year" class="col-xs-6"></div>';
            rowExpiration += '</div></td></tr>';
            $('.state-clean').next().after(rowExpiration).hide();
            $('#cc_expir_month').appendTo('#custom-exp-month');
            $('#cc_expir_year').appendTo('#custom-exp-year');

        }
    }

    //
    // Share
    //

    if ( $('form#invitationpage').length) {
        $('form#invitationpage').wrap('<div class="bsdbs-action-container"></div>');

        $('.bsdbs-action-container').wrapInner('<div class="bsdbs-action"></div>');

        $('form#invitationpage').addClass("bsdbs-form-share");
        $('body').addClass('page-bsdbs-share');

        // make fields behave like normal bootstrap fields
        $('td.label').removeClass('label');
        $('input[type=text], input[type=email], textarea').addClass('form-control').wrap('<div clas="form-group">');
        $('input[type=submit], input[type=button]').addClass('btn btn-primary btn-advance');

        // remove the crazy contact importer styling
        $('#contact_importer_button').removeAttr('id').removeClass('ui-state-default').addClass('btn btn-default btn-sm');
    }

    //
    // Process passed in variables
    //

    if ( $('.bsd-bootstrap').length ) {
        $data = $('.bsd-bootstrap');

        var well = $data.data('well');

        if (typeof well !== 'undefined') {
            $('.bsdbs-action').addClass('well');
        }

        var actionRight = $data.data('action-right');
        if (typeof actionRight !== 'undefined') {
            $('.bsdbs-content-container').addClass('col-sm-6');
            $('.bsdbs-action-container').addClass('col-sm-5 col-sm-offset-1');
        }

        var actionLeft = $data.data('action-left');
        if (typeof actionLeft !== 'undefined') {
            $('.bsdbs-content-container').addClass('col-sm-6 col-sm-offset-1');
            $('.bsdbs-action-container').addClass('col-sm-5');
            $('.bsdbs-action-container').before('.bsdbs-content-container');
        }

        var actionCenter = $data.data('action-center');
        if (typeof actionCenter !== 'undefined') {
            $('.bsdbs-action-container').addClass('col-sm-6 center-block');
        }

        var actionHeader = $data.data('action-header');
        if (typeof actionHeader !== 'undefined') {
            $('.bsdbs-action').prepend(actionHeader);
        }

        var actionFooter = $data.data('action-footer');
        if (typeof actionFooter !== 'undefined') {
            $('.bsdbs-action').append(actionFooter);
        }
    }

    // <div class="bsd-bootstrap"
    //     data-well
    //     data-action-right="col-sm-6"
    // ></div>

    // todo: Is it possible to pass in options with some data-attributes?
    //  * putting the form in a floated well (either left or right)
    //  * flipping to labels on the left, inputs on the right
    //  * making labels sr-only, and then using those values as placeholders

}(this, document, jQuery));
