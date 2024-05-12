(() => {
    // function block() {
    //     setInterval(() => {
    //         Function("debugger")();
    //     }, 50);
    // }
    // try {
    //     block();
    // } catch (err) {}
    var stayTunedBtn = document.getElementsByClassName('stay-tuned-btn')[0];
    stayTunedBtn.addEventListener('click', function(){
        var stayTunedInput = document.getElementsByClassName('stay-tuned-input')[0];
        var email = stayTunedInput.value;
        if (email) {
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)) {
                toast({'time':2000,'position':'middle','str':'邮箱格式错误！'});
                return;
            }
            var formData = new FormData();
            formData.append('appid', '17966');
            formData.append('signature', '27ca76707f0bc73acb71a2840556ecb0');
            formData.append('address', email);
            formData.append('target', 'zsI6O4');
            const sendFetch = function() {
                fetch('https://api.mysubmail.com/addressbook/mail/subscribe.json', {
                    method: 'post',
                    mode: 'no-cors',
                    body: formData,
                }).then(response => {
                    toast({'time':2000,'position':'middle','str':'订阅成功！'});
                    stayTunedInput.value = '';
                }).then(data => {
                })
            }
            if (navigator.sendBeacon) {
                let isTrue = navigator.sendBeacon('https://api.mysubmail.com/addressbook/mail/subscribe.json', formData);
                if (isTrue) {
                    toast({'time':2000,'position':'middle','str':'订阅成功！'});
                    stayTunedInput.value = '';
                } else {
                    sendFetch();
                }
            } else {
                sendFetch();
            }
            // var request = new XMLHttpRequest();
            // request.onreadystatechange = function () { // 状态发生变化时，函数被回调
            //     if (request.readyState === 4) { // 成功完成
            //         debugger
            //         // 判断响应结果:
            //         if (request.status === 200) {
            //             // 成功，通过responseText拿到响应的文本:
            //             return success(request.responseText);
            //         } else {
            //             // 失败，根据响应码判断失败原因:
            //             return fail(request.status);
            //         }
            //     } else {
            //         // HTTP请求还在继续...
            //     }
            // }
            // request.open('POST', 'https://api.mysubmail.com/addressbook/mail/subscribe.json');
            // request.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded');
            // request.setRequestHeader('Access-Control-Allow-Origin', '*');
            // request.withCredentials = true;
            // request.send(formData);
        } else {
            toast({'time':2000,'position':'middle','str':'请输入邮箱！'});
        }
    });
    const navBlock = document.querySelector(".nav-block");
    if (navBlock) {
        navBlock.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() === "a") {
                const curItem = navBlock.querySelector('.cur');
                curItem.classList.remove('cur');
                e.target.classList.add('cur')
            }
        });
    }

    window.addEventListener('scroll', (e) => {
        const navH = document.querySelector(".nav-block").scrollHeight;
        const section1 = document.querySelector(".section-p1");
        const section1Rec = section1.getBoundingClientRect();
        const section2 = document.querySelector(".section-p2");
        const section2Rec = section2.getBoundingClientRect();
        const section3 = document.querySelector(".section-p3");
        const section3Rec = section3.getBoundingClientRect();
        const section4 = document.querySelector(".section-p4");
        const section4Rec = section4.getBoundingClientRect();
        if (section1Rec.top <= navH && section1Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[0].classList.add('cur');
        }
        if (section2Rec.top <= navH && section2Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[1].classList.add('cur');
        }
        if (section3Rec.top <= navH && section3Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[1].classList.add('cur');
        }
        if (section4Rec.top <= navH && section4Rec.bottom >= navH) {
            const curItem = navBlock.querySelector('.cur');
            curItem.classList.remove('cur');
            navBlock.querySelectorAll('.nav-item a')[1].classList.add('cur');
        }
    });
    
})();