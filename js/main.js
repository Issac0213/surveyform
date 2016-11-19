
var surveyArray=[]

//submits the form onclick
function submitForm(){
   var form = document.getElementById('form')
   var select = document.getElementById('select').value
   var checkboxes = form.element.checkboxes
   var radios = form.element.radios
   var checkboxesArray =[]

   for (i = 0; i < checkboxes.length; i++){
   	     if(checkboxes[i].checked)
   	     	checkboxesArray.push(checkboxes[i].value)
   }
//loop through radio button
   for(i=0; i<radios.length; i++){
   	    if(radios[i].checked)
   	    	var radiosValue = radios[i].value
   }

   //cerat an object from user ansers
   var newSurvey={
   	checked: checkboxesArray,
   	selected: selected,
   	radiod: radiosValue
   }
//add newSurvey to survey array
	surveyArray.push(newSurvey)

	console.log(surveyArray)

	form.reset()
}

document.getElementById('submitButton').addEventListener('click', submitForm, false)


