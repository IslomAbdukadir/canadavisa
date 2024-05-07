function sendRequest(nameSelector, phoneSelector) {
    let name = document.querySelector(nameSelector).value;
    let phone = document.querySelector(phoneSelector).value;
    let requestText = encodeURI(`<b>Заявка</b>\nИмя: ${name}\nНомер: ${phone}`)
    fetch(`https://api.telegram.org/bot6763716350:AAFvDCuttNTObJ2HsaFMGekhCGBPL-fDOiE/sendMessage?text=${requestText}&chat_id=-4255284045&parse_mode=HTML`)
}

document.querySelector('.feature-consultation-form button').addEventListener('click', (value) => {
    value.preventDefault()
    sendRequest(`.feature-consultation-form input[name="name"]`, `.feature-consultation-form input[name="phone"]`)
})

document.querySelector('#form-modal button').addEventListener('click', (value) => {
    value.preventDefault()
    sendRequest(`#form-modal input[name="name"]`, `#form-modal input[name="phone"]`)
})

MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
})
$('[data-custom-open]').click(function () {
    $('.modal [name=form]').val($(this).data('form'))
})
$('[data-custom-close]').click(function () {
    $('.modal [name=form]').val('')
})

// 

let total = document.querySelector(".total");
let current = document.querySelector(".current");
let totalNumber;
let currentNumber;

const myswiper = new Swiper(".swiper", {
    speed: 800, // スライドが切り替わる時の速さ
    slidesPerView: "3", // スライド表示数
    spaceBetween: 50, // スライド間の距離
    loop: true, // ループさせる
    centeredSlides: true, // スライドを中央に配置にする
    autoplay: {
        // 自動再生させる
        delay: 1500, // 次のスライドまでの秒数
        disableOnInteraction: true // ユーザーがスライダー操作後も自動再生し続ける
    }
});

// 

$(document).ready(
    function () {
        $(".log-in").click(
            function () {
                $(".panel_call").animate({
                    width: 'toggle'
                }, 350)
                return false;
            }
        )
    }
);

// 



