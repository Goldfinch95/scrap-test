//llamar a puppeter
const puppeteer = require('puppeteer');

//creando una funcion asincrona
(async () => {
    //llamar al navegador chromium {headless:false} abre una ventana chromium 
    const browser = await puppeteer.launch({headless: false});
    //inicia una nueva pagina
    const page = await browser.newPage();
    //se dirige a esta direccion
    await page.goto('https://www.visit1066country.com/destinations/hastings/whats-on');
    //inidicaciones de lo que debe hacer dentro de la pagina
    const data = await page.evaluate(() => {
        //buscar el evento
        const events = document.querySelectorAll('.prodListItemWrapper');
        //se crea un array donde se almacenan los datos que se obtienen de la pagina
        const array = [];
        //se crea un loop que analice cada evento
        for (let i = 0; i < events.length; i++) {
            //se copian los datos del titulo, descripcion y fechas al array
            array.push({
                title: events[i].querySelector('.ProductName').innerText,
                description: events[i].querySelector('.desc').innerText,
                dates: events[i].querySelector('.dates').innerText,
            })
        }
        //se almacenan los datos en el array
        return array;
    });
    //se observa en consola
    console.log(data);
    //corre la funcion asincrona solo con ()
})();
