// //AJAX (Asynchronous JavaScript And XML) AND API'S (Application programming interface)
// //making request/loading/recive/send data via javascript to retrive data
// //data is return not in form of html,css and java but simply the info reqested int eh form of JSON
// //when requesting with javascript we just want he bare bones information
// //WORKING WITH API'S *** ==========================
// //(API)  aplication programmin interface- interaction between 1 piece of software with another
// //WEB API - api that are web based http based (variation of api') companies exposes certain end point for other software/people to use link like a portal to said info/ste
// //http request just like requesting a web  page
// //will return borebones info we dont want the html and styling just the info requested and nothing else
// //can do thinks like get price wether updates set up auto responders specifc to some input set up email text reminders updates ect.. and more
// //cna do whole buch with them 



// //WORKING WITH AXIOS *** ==========================
// //libary build upon fetch in javascript - used to simplify making http request
// //can be used in cleint side with javascript aswell as server side via nodeJS
// axios.get(`https:/api.cryptonator.com/api/ticker/btc-usd`)
//     // axios.get(`https:test/api.cryptonator.com/api/ticker/btc-usd`)//run to test catch
//     .then(function (res) {
//         console.log(`axios style: ${res.data.ticker.price}`)
//         console.log(res)
//     })
//     .catch(function (e) {
//         console.log(`ERRORR AXIOS`)
//         console.log(e)
//     })
// // NOTE this one is auto ran vs await below must be called(do to const set??) 
// // await async verision
// const fetchBitcoingPrice = async function () {
//     try {
//         const res = await axios.get(`https:/api.cryptonator.com/api/ticker/btc-usd`);
//         console.log(`await sync axios style: ${res.data.ticker.price}`)
//     } catch (e) {
//         console.log(`ERRORR AXIOS`)
//         console.log(e)
//     }
// }
// fetchBitcoingPrice()

// //NOTE when .catch .then require function to be passed
// //bit simply and shorter (not neede to use axios but nice to have)
// // if utilizing AWAIT ASYNC must have a TRY & CATCH

// // Setting Headers With AXIOS
// // const getDadJoke = async function () {
// //     //so with axios can actualy pass in the configuration 2nd argumnet (can also fo separatly)
// //     // then specifiy the format we want to accept info in only JSON :application/json (this may change over time and be dif api to api so read documentation )
// //     // can also continue to pass if more header if wanted (jsut liek query string only accept specified values)
// //     const config = { headers: { Accept: `application/json` } };
// //     const res = await axios.get(`https://icanhazdadjoke.com/`, config); //not every api request will config be needed/ api have rate imit dont span or loop
//         //important to take note fromat data is being returned
//             //also again request and config can be done on same line can just bit long
// //     //prior to th econfig rquest return data in text/html only, now that config can wor with it as object via jsonformat
// //     console.log(res.data.joke)

// // }
// // getDadJoke()//caling abopve fucntion
// //adding little dom manipulation
// const ul = document.querySelector(`#jokes`);
// const btn = document.querySelector(`button`);

// const getDadJoke = async function () {
//     try {
//         const config = { headers: { Accept: `application/json` } };
//         const res = await axios.get(`https://icanhazdadjoke.com/`, config);
//         // const res = await axios.get(`https:test//icanhazdadjoke.com/`, config);//test catch
//         return res.data.joke;
//     } catch (e) {
//         return `NO jokes avalible`;
//     }
// }
// // console.log(`still running?????`)
// // getDadJoke();
// // laying out sicely in deperate functions 
// async function addNewJoke() {
//     // we do await becuase we dont want thepromise it self we want the value returned once the promise is resolved(BAM)
//     let joke = await getDadJoke()
//     let li = document.createElement(`li`);
//     li.innerText = joke;
//     ul.appendChild(li);
// }

// const clickForJoke = btn.addEventListener(`click`, addNewJoke);
//     //NOTE when calling predifinesd function in argument simply do function name (if you add () at end will auto run as yuou are calling the function)
//     // the core of our request wich evrything else depends on is build on axios request 
// // set event listener then return value neede thenwe add to html doc (and that is exacuted every click of z button)


// //INTRO TO JSON ** ==========================
// // AJAJ (Asynchronous Javascript and JSON) most common fform used to return data
// // JSON (Java Script Object Notation ) made to provide pure data (not same as regular javascript different in function and written)
// // JSON can be used with multiple lnaguaes simply way to tranfer pure data laungues not important
// // JSON may provide info a a srting to turn this into a valid object in javascript use:
// // JSON.parse(dataWantIntoValidObject) - turn JSON string to valid object 
// //once thats done can extract data from it like any other object
// // and can also do this in reverse and send info via JSON so object needs to become string to be sent use:
// //JSON.stringify(dataWantIntoValidOJsonString) - turns object to valid JSON data transfer



// //THE FETCHING API ** ==========================
// // newer way to make api request (promise based )
// // fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)//returns a promise / is fullied provide info if not promise returns rejected
// //     //as soon as promise is resilved ,then id triggered all data sentin stream son not always have everything loaded just yet
// //     //not guarentedd to have all info just yet
// //     .then(function (res) {
// //         console.log(`Hi, paresing data 1 sec:`, res)
// //         return res.json()
// //     })
// //     .then(function (data) {
// //         console.log(`paresd data here:`, data)
// //         console.log(data.ticker.price)
// //     })
// //     .catch(function (e) {
// //         console.log(`ERROR`, e)
// //     })
// //NOTE much better then old way less syntex and simpler to read(colt - not perfect soplution and thats where libaries come in like axios)
// //now improving on above with asynx function
// const fetchBitcoinPrice = async function () {
//     try {
//         const res = await fetch(`https:/api.cryptonator.com/api/ticker/btc-usd`);
//         // const res = await fetch(`https:test/api.cryptonator.com/api/ticker/btc-usd`);// use to test catch
//         const data = await res.json();
//         console.log(`Bitcoin price at: ${data.ticker.price} per coin`);
//     } catch (e) {
//         console.log(`ERRRORRRRRR`, e)
//     }
//     console.log(`did it get to me, oh yeah hi`)//ckeck to see code runs after catch
// }
// fetchBitcoinPrice()

// // much easier and cleaner - not doing muchwith error
// // NIOTE catch and try have option (arguments) that dont requiire function(unless thier .then .catch ect..) 
//     // -that can be added to view what wa tryed and caught

// // ========================================================= 


// // POSTMAN * ==========================
//     //is a tool to help us view info- not nessesary (good to to test and view info)
// // shows us thier are different type of request we can make ex. (get, post, put, patch and more])
//     // GET is well getting information 
//     // Status Codes give us indicator as ifour response was fufilled or not, ex.404 Not Found ect..
//         // anyhting that start with a 2 mean some level of sucess, 2 is good
//         // if a 3 has to do with redirects
//         // anything with a 4 mean something is wrong with what we are asking for
//         // anythingwith a 5 means something wring in server side
//     // Headers are key value pairs 
// // Query String -  q= or q=:  (what comes after is specifiying what we are looking for)
//     //Ex.
// // URL: /search/shows?q=:query  - variable you provide
//     // anytime you see a `:` means there is a varoble aka the :"qeury" can be anything ex. :wolf or :mad ect..
// // lots of apis will be structured this way for us to provide input ( like searches and provides results)
//     // dependent on the endpnt will expect different input that will impact what we get back
//         // some may ask for specified name id word value ect.. while other can be anything
//         //  samo we can pass in key value pairs to get specified data ect..
//             // like weather api asks for city name or can do conrdinates and that input will impact the data we get back
//     // every api is different
//         // dome may require us to add our own headers
//             // this will inmpact the forat of data transfered
//                 // where the default format may be html but i want JSON :
//                 //- so i add my header then value for may data to be transfered in that format



// // MAKING XHR'S * ==========================
//     //OLD WAY DONT USE THIS FOR LEARNIG PURPOSE "origianl way"
//         // this way is all based on call back prmisesnot suppirted 
// // done be making an objecct 
// // then a on.load and on.error call back (similar to primises)
// // then a open.requst and send.request
// // const req = new XMLHttpRequest();

// // req.onload = function () {
// //     console.log(`all done with request`);
// //     //to insure data is recived in format wanted -
// //     const data = JSON.parse(this.responseText);//this vs this.responseText / 1st returned object 2nd returned string
// //     console.log(data)
// //     //selecting specified value in data pulled
// //     console.log(data.ticker.price)
// // }

// // req.onerror = function () {
// //     console.log(`ERROR!!`);
// //     console.log(this);
// // }
// // // 1st is requst type , then th url
// // req.open(`get`, `https://api.cryptonator.com/api/ticker/btc-usd`) ;
// // req.send(); //send requst
// here 
// ------------------------------------------------------------------------------------------- 
// TV SEARCH MINI PROJECT
// URL: /singlesearch/shows?q=:query
// Example: http://api.tvmaze.com/singlesearch/shows?q=girls

// have form or basic input 
//form submit event - no action 
//type text search/button
// we want to display img md opf relevent search
const form = document.querySelector(`form`);
const btnSearch = document.querySelector(`button`);
const input = document.querySelector(`input`);



form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    removeImg();
    const userInput = form.elements.query.value;
    const config = { params: { q: userInput, test: `draimius` } }; // every key value pair added here will be added to the query string *(use when have multiple parts to the query string)
    // can add params and or headers/ here added test to get added to the auery string and can see in f15 network search headers, shows how we can pass several params and hearders 
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config); //sometimes may have query string requires multiple values
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${userInput}`); //sometimes may have query string requires multiple values
    // console.log(res.data[0].show.image.medium);
    addImg(res.data)//we get to data here **()
    form.elements.query.value = ``; //clear input
})

const addImg = function (shows) {
    //then we start at data and grab that array that become shows and each individual one becomes results **()
    for (let result of shows) {
        // console.log(result);
        if (result.show.image) {
            let image = document.createElement(`img`);
            image.src = result.show.image.medium;
            document.body.append(image)
        }
    }

}
const removeImg = function () {
    let allImg = document.querySelectorAll(`img`);
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].remove();
    }
}
