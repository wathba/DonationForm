$(document).ready(function() {
    var amount, type = "General",
        purpose = "General",
        amount_input;


    $(".check-list li label").click(function() {
        amount_input = false
        $("#other-amount").val("");
        $(".check-list li label").removeClass("active-btn");
        $(this).addClass("active-btn");
        amount = $(this).attr("amount");
        $(".other-amt").removeClass("active-input");
    });

    $(".other-amt").click(function() {
        amount_input = true
        $(".check-list li label").removeClass("active-btn");
        $(this).addClass("active-input");

    });
    $(".donate-btn").click(function() {
        purpose = $(".purposePicker").find(":selected").val()
        type = $(".typePicker").find(":selected").val()
        console.log(purpose + " =>" + type);
        if (amount_input) {
            amount = $("#other-amount").val();
        }
        if (amount != null && type != null && purpose != null) {
            $("input[name='item_name']").val(type + " for " + purpose);
            $("input[name='amount']").val(amount); //
            $("input[name='return']").val("http://www.jabeer.ml/");
            console.log($("input[name='return']").val());
            $("#paypal-form").submit();

        } else {
            $(".alert-bar").show().append("<div class='alert alert-danger'><strong>Incomplete Infomation!</strong> please select your fields.</div>")
            setTimeout(function() {
                $(".alert-bar").empty();
            }, 5000)
        }
    });
});