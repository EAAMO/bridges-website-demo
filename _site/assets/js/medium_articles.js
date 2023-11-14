document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("medium_articles");

    var paragraph = document.createElement("h2");
    paragraph.textContent = "EAAMO Bridges Medium Articles";
    container.appendChild(paragraph);

    var outer_div = document.createElement("div");
    outer_div.className = 'slideshow-container'
    container.appendChild(outer_div);

    const mediumArticle = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@md4sg";

    var i = 0;
    fetch(mediumArticle)
        .then(response => response.json())
        .then(data => {
        data.items.forEach(item => {
            i = i + 1;
            var inner_div = document.createElement("div");
            inner_div.className = 'mySlides fade center-text';
            inner_div.setAttribute("style", "width:100%;height:400px;overflow:hidden;")
            

            var upper_text = document.createElement("div");
            upper_text.className = 'numbertext';
            upper_text.innerHTML = item.pubDate.slice(0, 10);

            img_el = document.createElement("img");
            img_el.className = "d-block w-100";
            img_el.setAttribute("alt", item.title);
            img_el.setAttribute("src", item.thumbnail);
            img_el.setAttribute("style", "width:100%");

            div_text = document.createElement("div");
            div_text.className = "text";
            a_text = document.createElement("a");
            a_text.setAttribute("href", item.link);
            a_text.setAttribute("target", "_blank");
            a_text.innerHTML = item.title

            inner_div.appendChild(upper_text);
            inner_div.appendChild(img_el);
            div_text.appendChild(a_text);
            inner_div.appendChild(div_text);
            outer_div.appendChild(inner_div);
        });
        })

        var prev_a = document.createElement("a");
        prev_a.className = "prev"
        prev_a.setAttribute("onclick", "plusSlides(-1)");
        prev_a.innerHTML = "&#10094;";
        outer_div.appendChild(prev_a);

        var next_a = document.createElement("a");
        next_a.className = "next"
        next_a.setAttribute("onclick", "plusSlides(1)");
        next_a.innerHTML = "&#10095;";
        outer_div.appendChild(next_a);

        var after_div = document.createElement("div");
        after_div.setAttribute("style", "text-align:center");
        container.appendChild(after_div);

        var i = 0;
        fetch(mediumArticle)
        .then(response => response.json())
        .then(data => {
        data.items.forEach(item => {
            i = i + 1;
            var inner_span = document.createElement("span");
            inner_span.className = 'dot';
            inner_span.setAttribute("onclick", "currentSlide(" + i + ")");
            after_div.appendChild(inner_span);
        });
        })
});