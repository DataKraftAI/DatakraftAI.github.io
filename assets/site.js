// DataKraft: language switch (EN/DE) shared by all pages.
// Order: ?lang= in the link (the job app can add ?lang=de) > last choice on this device > English.
(function(){
  var qs = new URLSearchParams(location.search);
  var lang = (qs.get("lang") || localStorage.getItem("dk_lang") || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  function set(l){
    lang = l;
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    try{ localStorage.setItem("dk_lang", l); }catch(e){}
    // keep the language when moving between pages
    document.querySelectorAll("a[data-keep-lang]").forEach(function(a){
      var u = new URL(a.getAttribute("href"), location.href);
      if(l === "de") u.searchParams.set("lang","de"); else u.searchParams.delete("lang");
      a.setAttribute("href", u.pathname + u.search + u.hash);
    });
  }
  set(lang);
  document.addEventListener("click", function(e){
    var b = e.target.closest("[data-set]");
    if(b){ set(b.getAttribute("data-set")); }
  });
  var y = document.getElementById("y"); if(y) y.textContent = new Date().getFullYear();
})();
