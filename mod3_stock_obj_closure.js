exports.stock = function stock (title) {
    let    _title = title;//  Title of stock manager
    const  _stock = {};   //  prods: { <code>: {c: code, desc: <description>,  n: <number>}
 
            /* Returns access object to internal variables, uses ES6 object method syntax */
    return {

        title  ()  {                     /* Returns title of stock manager */
            return _title; 
        },

        new_p (code, desc) {             /* Adds n prods to stock */
            if (!_stock[code]) {
                _stock[code] = {code, desc, n:0};
                return _stock[code];
            };
            return null;
        },

        add (code, n) {   /* if product exists add n and return product, else return null*/
            if (_stock[code]) {
                _stock[code].n += n;
                return _stock[code];
            }
            return null;
        },

            /* if n prods in stock subtract n and return product, else return null*/
        rem (code, n) {
            if ( _stock[code] && _stock[code].n >= n ) {
                _stock[code].n -= n;
                return _stock[code];
            } 
            return null;
        },

        number () {    /* return nuber of prods (length of array of prod objects)  */
            return Object.keys(_stock).length;
        },

       get_p (code) {       /* return product obj if exists or null if it doesn’t  */
            // ....... add code here
			if (_stock[code]) {
                return  _stock[code];
            }
            return null;
        },

                     /* if code exists eliminate it and return true, else return false  */
        del_p (code) {
            // ....... add code here
			if (_stock[code]) {
				let obj = this.get_p(code);
				delete _stock[code];
				return obj;
				
            }
            return null;
            // .......
        },

                /* Add n to prod if code exists, or create new prod with json params*/
        addJSON (json_prods)  {
            // ....... add code here
			
			let obj = JSON.parse(json_prods);
			console.log(obj);
			for(let a in obj){
				if(this.get_p(a)){
					this.add (a, obj[a].n);
				}else{
					this.new_p(a, obj[a].desc)
					this.add(a, obj[a].n)
				}
			}

            // .......
        },

        getJSON () {  /* Add n to prod if code exists, or create new prod*/
            return JSON.stringify( _stock );
        },

        reset () {              /*   Remove all products from _stock */
            _stock = {}; 
        }
    }
}
//module.exports = {stock};

