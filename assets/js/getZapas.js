export const getZapas = async()=>{
    try{
        const response = await fetch("https://zapatillas2.onrender.com");
        const data = await response.json();

        return data.results;
    }catch(error){
        console.log('El error es: ${error}');
    }w
}