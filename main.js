document.getElementById('foodForm').addEventListener('submit'), function(event){
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const goal = document.getElementById('goal').value;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let meals = "";
    if (goal === 'تضخيم'){
        meals ='<h2>اقتراحات للوجبات للتضخيم</h2>'

    <ul>
      
    
    }

}