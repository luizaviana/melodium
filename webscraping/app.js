const puppeteer = require('puppeteer');
const express = require('express');
const res = require('express/lib/response');
const app = express();

var pesquisa


    app.get('/:id', async function(req, res) {
        //teste = req.params.id;
        //
        
        pesquisa = await scraper(req.params.id)

        console.log(pesquisa)

        res.status(200).send(pesquisa);
    });




//console.log(teste)


async function scraper (params) {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://open.spotify.com/search/' + params)
    const endereco = 
  
    await page.waitForTimeout(2000)
    await page.screenshot({path: '1.png'})
  
    var obj = [];
    for (var i = 1; i < 5; i++) {
      const [html_img] = await page.$x(`//*[@class="JUa6JJNj7R_Y3i4P8YUX"]/div[2]/div[${i}]/div/div/div/img`)
      const link = await html_img.getProperty('src')
      const rawLink = await link.jsonValue()
      
  
      const [html_nome] = await page.$x(`//*[@class="JUa6JJNj7R_Y3i4P8YUX"]/div[2]/div[${i}]/div/div[1]/div[2]/div`);
      const nome = await html_nome.getProperty('textContent');
      const rawNome = await nome.jsonValue();
  
      const [html_artista] = await page.$x(`//*[@class="JUa6JJNj7R_Y3i4P8YUX"]/div[2]/div[${i}]/div/div[1]/div[2]/span/a[1]`);
      const artista = await html_artista.getProperty('textContent');
      const rawArtista = await artista.jsonValue();
  
      var objeto = []
      objeto.push(rawLink);
      objeto.push(rawNome);
      objeto.push(rawArtista);
      
      obj.push(objeto);
      
    }
    //console.log("teste1"+ obj);
    await browser.close()
   /* 
    app.get('/'+params, function(req, res) {
        res.status(200).send({
            objeto: obj
        })  
    });
    */
   /*
    app.use('/', (req, res, next ) => {
        console.log("oiajsdflasd");
        console.log(obj);
        res.status(200).send({
            objeto: obj
        })  
    }) 
    */

    return obj;
}

//   async function teste()
//   {
//       const x = await scraper();
//       console.log(x);
//   }




//const express = require('express');
//const object = await require('./t');
//const app = express();





module.exports = app;