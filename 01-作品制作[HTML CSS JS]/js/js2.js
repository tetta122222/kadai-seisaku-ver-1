   $(function () {
        const htmlList = document.querySelector("#list");
        var ajax = new XMLHttpRequest();
        ajax.open("get", "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=a6ca5ebe6caee435e9c312d71da36e3f&pref=PREF46&hit_per_page=50&id");
        ajax.responseType = 'json';
        ajax.send();
        ajax.onload = function (e) {
            let array = e.target.response.rest;
            let total_hit = e.target.response.total_hit_count;
            total_hit = 50;
            let textcontent;
            for( let i = 0; i < total_hit; i++ ){
                textcontent =
                '<div class="hotel_box">' + '<img src ="' + array[i].image_url.shop_image1 + '">'+  
                '<ul><li>' + array[i].name + '</li>' + 
                '<li>' + array[i].name_kana + '</li>' + 
                '<li>' + array[i].address + '</li>' + '</ul>' + 
                '<div class = "hotel_child">' + '<p>予算￥'+array[i].budget +'～</p></div>'
                '<a href ="' + array[i].url + '"> 詳細情報へ</a></div></div>';
                console.log(textcontent)
                htmlList.innerHTML += textcontent;
            };
        };
    });
