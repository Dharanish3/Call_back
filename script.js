// setTimeout(() => console.log("Hello"), 5000)
// setTimeout(() => console.log("World"), 3000)

var fun = document.getElementById('func')

setTimeout(() => {
    fun.innerText='10'
    setTimeout(() => {
        fun.innerText='9'
        setTimeout(() => {
            fun.innerText='8'
            setTimeout(() => {
                fun.innerText='7'
                setTimeout(() => {
                    fun.innerText='6'
                    setTimeout(() => {
                        fun.innerText='5'
                        setTimeout(() => {
                            fun.innerText='4'
                            setTimeout(() => {
                                fun.innerText='3'
                                setTimeout(() => {
                                    fun.innerText='2'
                                    setTimeout(() => {
                                        fun.innerText='1'
                                        setTimeout(() => {
                                            fun.innerText = 'Happy Indepence Day'
                                            
                                        },1000)
                                        
                                    },1000)
                                    
                                },1000)
                                
                            },1000)
                            
                        },1000)
                        
                    },1000)
                    
                },1000)
                
            },1000)
            
        },1000)
        
    },1000)
},1000)