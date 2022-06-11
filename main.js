 const animLoader =document.querySelector('.identity__main--content');
 const animLoader2 =document.querySelector('.nav__menu');
 const animLoader3 =document.querySelector('.identity__main--div');

 const img = document.querySelector(".animImg");
 const img2 = document.querySelector(".animImg2");
 const img3 = document.querySelector(".animImg3");
 const img4 = document.querySelector(".animImg4");

 const txt = document.querySelector(".aboutMe__content");
 const txt2 = document.querySelector(".job__content");
 const txt3 = document.querySelector(".skills__content");
 const txt4 = document.querySelector(".softskills__content");

function fListener() {
    window.addEventListener("load",()=>{
        animLoader.classList.add('active');
        animLoader2.classList.add('active');
        animLoader3.classList.add('active');
    })
    window.addEventListener("scroll",()=>{
            const scrollTop = window.innerHeight;
            const topElementToTopViewport = img.getBoundingClientRect().top;
            const topElementToTopViewport2 = img2.getBoundingClientRect().top;
            const topElementToTopViewport3 = img3.getBoundingClientRect().top;
            const topElementToTopViewport4 = img4.getBoundingClientRect().top;

            if (scrollTop > ((scrollTop+topElementToTopViewport)/10).toFixed()){
                img.classList.add('slide');
                txt.classList.add('slide');
            }
            if (scrollTop > ((scrollTop+topElementToTopViewport2)/2).toFixed()){
                img2.classList.add('slide');
                txt2.classList.add('slide');
            }
            if (scrollTop > ((scrollTop+topElementToTopViewport3)/2).toFixed()){
                img3.classList.add('slide');
                txt3.classList.add('slide');

            }
            if (scrollTop > ((scrollTop+topElementToTopViewport4)/2).toFixed()){
                img4.classList.add('slide');
                txt4.classList.add('slide');

            }
        })
}
fListener();