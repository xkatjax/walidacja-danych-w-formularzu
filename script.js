function isNumber (valueToCheck)
{
    return !isNaN (valueToCheck);   //jeśli coś jest liczbą to zwraca true
}

window.onload = function ()
{
    var poleLiczbowe = document.getElementById("myForm").poleLiczbowe;
    var poleTekstowe = document.getElementById("myForm").poleTekstowe;
    var submitMyForm = document.getElementById("myForm").submitMyForm;

    var info = document.getElementById("info");

    var isEverythigOK = true;
   
    poleLiczbowe.onkeyup = function (e)
    {
        if (!isNumber(this.value)){
            this.style.backgroundColor = "red";
            info.innerHTML = "Niepoprawny format - pole przyjmuje tylko wartości liczbowe";
            isEverythigOK = false;
        }
        
        else{
            this.style.backgroundColor = "green";
            info.innerHTML = " ";
            isEverythigOK = true;
        }
        
    };

    submitMyForm.onclick = function (e)
    {
        if (!isEverythigOK)
        e.preventDefault ();
    }
        
};