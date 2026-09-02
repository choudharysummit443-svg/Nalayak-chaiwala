function orderChai() {

    const phone = "919214211171";

    const message =
        "Hello Nalayak Chaiwala! Mujhe chai order karni hai. ☕";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),

        "_blank"
    );
}


function orderItem(item) {

    const phone = "919214211171";

    const message =
        "Hello Nalayak Chaiwala! Mujhe " +
        item +
        " order karni hai. ☕";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),

        "_blank"
    );
}


function contactUs() {

    const phone = "919214211171";

    window.open(
        "https://wa.me/" +
        phone,

        "_blank"
    );
}