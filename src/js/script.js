// jquery ready section
$(document).ready(function () {

    $("#search").on('click', function () {

        $loan = $("#loan").val();
        $interest = $("#interest").val();
        $period = $("#period").val();

        if ($loan == "" || $interest == "" || $period == "") {
            $("#main").text("EMPTY INPUT").css("background-color", "RED");
        } else if ($loan < 0 || $interest < 0 || $period < 0) {
            $("#main").text("WRONG INPUT").css("background-color", "RED");
        } else {
            $emi = ($loan * $interest * $period) / 100;
            $totalamount = $loan + $emi;
            $("#main").text("The Interest is " + $emi).css("background-color", "cyan");
            $("#maina").text("The Total Loan is " + $totalamount).css("background-color", "cyan");
            $("#mainaa").text("The Time Period is is " + $period).css("background-color", "cyan");
        }



    });
    $("#reset").on('click', function () {

        $loan = 0;
        $interest = 0;
        $period = 0;
        $("#loan").val(0);
        $("#interest").val($interest);
        $("#period").val($period);





    });


});
